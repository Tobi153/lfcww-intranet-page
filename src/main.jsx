import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { TutorialsPage } from "./pages/TutorialsPage/TutorialsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { TutorialVideosPage } from "./pages/TutorialVideosPage/TutorialVideosPage";
import { Layout } from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tutorials",
        element: <TutorialsPage />,
      },
      {
        path: "/tutorials/:id",
        element: <TutorialVideosPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
