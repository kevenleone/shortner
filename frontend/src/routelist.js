import {
  graph, repo, settings, globe,
} from 'octicons-react';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

const Routes = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    icon: graph,
    active: true,
    private: true,
    exact: true,
  },
  {
    title: 'Link Management',
    path: '/linkmanagement',
    icon: repo,
    active: true,
    private: true,
    exact: true,
  },
  {
    title: 'Links',
    path: '/links',
    icon: globe,
    active: true,
    private: true,
    exact: true,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: settings,
    component: Settings,
    active: true,
    private: true,
    exact: true,
  },
  {
    title: 'Home',
    path: '/',
    active: true,
    private: false,
    component: Home,
    exact: true,
  },
  {
    title: 'SignIn',
    path: '/signin',
    active: true,
    private: false,
    component: SignIn,
    exact: true,
  },
];

const HeaderRoutes = [];

export { Routes, HeaderRoutes };
