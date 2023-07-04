import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "../pages/List";
import Post from "../pages/Post";
import About from "../pages/About";
import { postLoader, listLoader, aboutLoader } from "./loader";

const router = createBrowserRouter([
  { path: "/list", element: <List />, loader: listLoader },
  {
    path: "/post/:postId",
    element: <Post />,
    loader: ({ params }) => postLoader(params.postId!),
  },
  {
    path: "/about/:userId",
    element: <About />,
    loader: ({ params }) => aboutLoader(params.userId!),
  },
]);

function RouterComponent() {
  return <RouterProvider router={router} />;
}

export default RouterComponent;
