import { createBrowserRouter } from "react-router-dom";

import Layout from "./routes/layout.jsx";
import ErrorPage from "./routes/errorPage.jsx";
import Index from "./routes/index.jsx";
import Auth from "./routes/auth.jsx";
import UserArticles from "./routes/userArticles.jsx";
import Editor from "./routes/editor.jsx";
import PublicArticles from "./routes/publicArticles.jsx";
import Reader from "./routes/reader.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "auth/login",
            element: <Auth />,
          },
          {
            path: "auth/register",
            element: <Auth />,
          },
          {
            path: "articles",
            element: <PublicArticles />,
          },
          {
            path: ":userId/articles",
            element: <UserArticles />,
          },
          {
            path: ":userId/:docId/editor",
            element: <Editor />,
          },
          {
            path: ":userId/:docId/reader",
            element: <Reader />,
          },
        ],
      },
    ],
  },
]);
