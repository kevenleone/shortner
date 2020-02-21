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
        <div className="head">
          <h1>{title}</h1>
        </div>
        <div className="children_content">
          { children }
        </div>
      </main>
    </div>
  );
}
