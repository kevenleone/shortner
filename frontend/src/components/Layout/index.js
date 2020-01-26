import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

import './Layout.scss';

export default function Layout({ children, title }) {
  return (
    <div className="Layout">
      <Header />
      <Sidebar />
      <main className="content">
        <h1>{ title }</h1>
        { children }
      </main>
    </div>
  );
}
