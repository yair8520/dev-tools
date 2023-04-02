import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../Layout';
import { Formatter } from '../Pages';

export const AppRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Formatter />,
      },
    ],
  },
]);
