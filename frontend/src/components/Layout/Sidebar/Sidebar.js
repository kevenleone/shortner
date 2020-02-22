import React from 'react';
import { Link } from 'react-router-dom';
import { Octicon } from 'octicons-react';
import { useSelector } from 'react-redux';
import { Routes } from '../../../routelist';
import Avatar from '../../Avatar';
import './Sidebar.scss';

export default function Sidebar() {
  const { pathname } = window.location;
  const { loggedUser: { username, photo, organization } } = useSelector((state) => state.base);
  return (
    <div className="Sidebar">
      <section>
        <div className="user">
          <Avatar img={photo} />
          <span className="username">{username}</span>
          <span>{organization}</span>
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
