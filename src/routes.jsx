// * Base
import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// * Components
import App from './App';
import Loading from './components/Loading/Loading';

const Main = lazy(() => import('./pages/Main/Main'));
const List = lazy(() => import('./pages/List/List'));
const Form = lazy(() => import('./pages/Form/Form'));
const Error = lazy(() => import('./components/Error/Error'));

const Element = ({ page }) => {
  return <Suspense fallback={<Loading />}>{page}</Suspense>;
};

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Element page={<Main />} />,
      },
      {
        path: '/list',
        element: <Element page={<List />} />,
      },
      {
        path: '/form',
        element: <Element page={<Form />} />,
      },
      {
        path: '*',
        element: <Element page={<Error />} />,
      },
    ],
  },
]);

export default routes;
