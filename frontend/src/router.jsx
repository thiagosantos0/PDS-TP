import { createBrowserRouter } from 'react-router-dom';

import Layout from './routes/Layout.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Index from './routes/Index.jsx';
import Login, { action as loginAction } from './routes/Login.jsx';
import Register, { action as registerAction } from './routes/Register.jsx';
import UserArticles from './routes/UserArticles.jsx';
import Editor from './routes/Editor.jsx';
import PublicArticles from './routes/PublicArticles.jsx';
import Reader from './routes/Reader.jsx';

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
