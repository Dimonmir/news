import { createBrowserRouter } from 'react-router-dom';
import DefaultScreen from '../layout/DefaultScreen';
import NotFoundPage from '@pages/NotFoundPage';
import MainPage from '@pages/MainPage';

export const customRoutes = createBrowserRouter([
  {
    path: '/',
    element: <DefaultScreen />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'post',
        element: <MainPage />,
      },
      // {
      //   path: '*',
      //   element: <NotFoundPage />,
      // },
    ],
  },
]);
