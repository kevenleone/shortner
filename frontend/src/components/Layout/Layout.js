import React from 'react';
import {
  EuiText,
  EuiPageContentBody,
} from '@elastic/eui';
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
          <EuiPageContentBody>
            <EuiText grow={false} size="m">
              <h1>{title}</h1>
            </EuiText>
          </EuiPageContentBody>
        </div>
        <div className="children_content">
          { children }
        </div>
      </main>
    </div>
  );
}
