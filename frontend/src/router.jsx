import { createBrowserRouter } from 'react-router-dom';

import Layout from './routes/layout.jsx';
import ErrorPage from './routes/errorPage.jsx';
import Index from './routes/index.jsx';
import Login, { action as loginAction } from './routes/login.jsx';
import Register, { action as registerAction } from './routes/register.jsx';
import UserArticles from './routes/userArticles.jsx';
import Editor from './routes/editor.jsx';
import PublicArticles from './routes/publicArticles.jsx';
import Reader from './routes/reader.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: 'auth/login',
            element: <Login />,
            action: loginAction,
          },
          {
            path: 'auth/register',
            element: <Register />,
            action: registerAction,
          },
          {
            path: 'articles',
            element: <PublicArticles />,
          },
          {
            path: ':userId/articles',
            element: <UserArticles />,
          },
          {
            path: ':userId/:docId/editor',
            element: <Editor />,
          },
          {
            path: ':userId/:docId/reader',
            element: <Reader />,
          },
        ],
      },
    ],
  },
]);
