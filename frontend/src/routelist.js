import {
  graph, settings, globe,
} from 'octicons-react';
import Home from './pages/Home';
import Sign from './pages/Sign';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import LinkManagement from './pages/LinkManagement/LinkManagement';

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
    path: '/links',
    icon: globe,
    component: LinkManagement,
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
    title: 'Sign',
    path: '/sign',
    active: true,
    private: false,
    component: Sign,
    exact: true,
  },
];

const HeaderRoutes = [];

export { Routes, HeaderRoutes };
