import { createBrowserRouter } from 'react-router-dom';

import Layout, { loader as layoutLoader } from './routes/Layout.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Index from './routes/Index.jsx';
import Login, { action as loginAction } from './routes/Login.jsx';
import Register, { action as registerAction } from './routes/Register.jsx';
import UserArticles, {
  action as userArticlesAction,
  loader as userArticlesLoader,
} from './routes/UserArticles.jsx';
import Editor, {
  action as editorAction,
  loader as editorLoader,
} from './routes/Editor.jsx';
import PublicArticles, {
  loader as publicArticlesLoader,
} from './routes/PublicArticles.jsx';
import Reader, { loader as readerLoader } from './routes/Reader.jsx';
import { action as deleteArticleAction } from './routes/DeleteArticle.js';
import { action as createArticleAction } from './routes/CreateArticle.js';
import RequireAuth, {
  action as requireAuthAction,
} from './routes/RequireAuth.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: layoutLoader,
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
            loader: publicArticlesLoader,
          },
          {
            path: ':userId/:docId/reader',
            element: <Reader />,
            loader: readerLoader,
          },
          {
            path: 'sec',
            element: <RequireAuth />,
            errorElement: <ErrorPage />,
            action: requireAuthAction,
            children: [
              {
                path: ':userId/articles',
                element: <UserArticles />,
                action: userArticlesAction,
                loader: userArticlesLoader,
              },
              {
                path: ':userId/articles/create',
                action: createArticleAction,
              },
              {
                path: ':userId/:docId/delete',
                action: deleteArticleAction,
              },
              {
                path: ':userId/:docId/editor',
                element: <Editor />,
                action: editorAction,
                loader: editorLoader,
              },
            ],
          },
        ],
      },
    ],
  },
]);
