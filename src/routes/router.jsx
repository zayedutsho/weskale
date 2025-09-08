import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "our-process",
        element: <Process />,
      },

      //  404 not found route
      {
        path: "*",
        element: (
          <div className="min-h-[100vh] flex items-center justify-center">
            404 Not Found
          </div>
        ),
      },
    ],
  },
  //  404 not found route
  {
    path: "*",
    element: (
      <div className="min-h-[70vh] flex items-center justify-center">
        404 Not Found
      </div>
    ),
  },
]);

export default router;
