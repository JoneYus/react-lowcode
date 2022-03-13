import type { RouteObject } from 'react-router-dom';
import BaseLayout from '../layout/BaseLayout';
import Home from '../pages/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
