import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import List from "pages/List";
import Post from "pages/Post";
import About from "pages/About";
import AlbumList from "pages/AlbumList";
import Album from "pages/Album";
import Layout from "components/layout/Layout";
import {
  postLoader,
  listLoader,
  aboutLoader,
  albumListLoader,
  albumLoader,
} from "./loader";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/list" /> },
  {
    path: "/list",
    element: (
      <Layout>
        <List />
      </Layout>
    ),
    loader: listLoader,
  },
  {
    path: "/post/:postId",
    element: (
      <Layout>
        <Post />
      </Layout>
    ),
    loader: ({ params }) => postLoader(params.postId!),
  },
  {
    path: "/albums",
    element: (
      <Layout>
        <AlbumList />
      </Layout>
    ),
    loader: albumListLoader,
  },
  {
    path: "/albums/:userId",
    element: (
      <Layout>
        <Album />
      </Layout>
    ),
    loader: ({ params }) => albumLoader(params.userId!),
  },
  {
    path: "/about/:userId",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
    loader: ({ params }) => aboutLoader(params.userId!),
  },
]);

function RouterComponent() {
  return <RouterProvider router={router} />;
}

export default RouterComponent;
