import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Octicon } from 'octicons-react';
import { EuiAvatar } from '@elastic/eui';
import { Routes } from '../../../routelist';

import './Sidebar.scss';

export default function Sidebar() {
  const { loggedUser: { company, username, photo } } = useSelector((state) => state.base);
  const { pathname } = window.location;
  return (
    <div className="Sidebar">
      <section>
        <div className="user">
          <EuiAvatar
            size="xl"
            name={username}
            imageUrl={photo}
          />
          <span className="username">{username}</span>
          <span>{company}</span>
        </div>
        <div>
          <ul>
            {
              Routes.filter((r) => r.active && r.private).map(({ title, icon, path }) => (
                <Link key={path} to={path} className={path === pathname ? 'active' : ''}>
                  <Octicon icon={icon} scale={1.5} />
                  <span>{title}</span>
                </Link>
              ))
            }
          </ul>
        </div>
      </section>
    </div>
  );
}
