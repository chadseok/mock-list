import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import PostList from "pages/PostList";
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
  { path: "/", element: <Navigate to="/posts" /> },
  {
    path: "/posts",
    element: (
      <Layout>
        <PostList />
      </Layout>
    ),
    loader: listLoader,
  },
  {
    path: "/posts/:postId",
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
    path: "/albums/:albumId",
    element: (
      <Layout>
        <Album />
      </Layout>
    ),
    loader: ({ params }) => albumLoader(params.albumId!),
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
