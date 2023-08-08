import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Main from "../Components/Pages/Home/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <Main></Main>
        },
      ]
    },
  ]);

  export default router;