import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "../pages/List";
import Post from "../pages/Post";
import About from "../pages/About";

const router = createBrowserRouter([
  { path: "/list", element: <List /> },
  { path: "/post/:postId", element: <Post /> },
  { path: "/about", element: <About /> },
]);

function RouterComponent() {
  return <RouterProvider router={router} />;
}

export default RouterComponent;
