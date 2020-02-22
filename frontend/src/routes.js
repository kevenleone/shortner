import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Layout from './components/Layout';
import { Routes } from './routelist';

const isAuthenticated = localStorage.getItem('@token');

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedUser, token } = useSelector((state) => state.base);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token && loggedUser) {
          return (
            <>
              <Layout {...rest}>
                <Component {...props} />
              </Layout>
            </>
          );
        }
        return <Redirect to={{ pathname: '/sign', state: { from: props.location } }} />;
      }}
    />
  );
};

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthenticated && window.location.pathname === '/sign' ? (
        <Redirect to={{ pathname: '/dashboard' }} />
      )
        : (
          <>
            <Component {...props} />
          </>
        )

    )}
  />
);

export default function () {
  return (
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
  );
}
