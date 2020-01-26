import React from 'react';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import { Routes } from './routelist';


const isAuthenticated = true;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthenticated ? (
        <>
          <Layout {...rest}>
            <Component {...props} />
          </Layout>
        </>
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    )}
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <>
        <Header />
        <Component {...props} />
      </>
    )}
  />
);

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        {
          Routes.filter((r) => !r.private && r.component).map((r) => (
            <PublicRoute key={r.title} {...r} />
          ))
        }
        {
          Routes.filter((r) => r.private && r.component).map((r) => (
            <PrivateRoute key={r.title} {...r} />
          ))
        }
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
