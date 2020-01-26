import React from 'react';
import { Link } from 'react-router-dom';
import { Octicon } from 'octicons-react';
import { Routes } from '../../../routelist';
import './Sidebar.scss';

export default function Sidebar() {
  const { pathname } = window.location;
  return (
    <div className="Sidebar">
      <section>
        <div className="user">
          <img src="https://media-exp2.licdn.com/dms/image/C4E03AQG2z3RDfKrVvg/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=LhzWNzzLsE006mXa0bFlIFt9IB85V9XUNVLHD5NfoNc" alt="keven profile" />
          <span className="username">Keven Leone</span>
          <span>Lead Developer</span>
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
