import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./Analytics')));
const TestAPI = Loadable(lazy(() => import('./shared/TestAPI')));

const dashboardRoutes = [
  { path: '/dashboard/default', element: <Analytics />, auth: authRoles.admin },
  { path: '/dashboard/pekerjaanTable', element: <TestAPI />},
  
];

export default dashboardRoutes;
