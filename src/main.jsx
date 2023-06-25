import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Home from "./components/home/Home";
import Statistics from "./components/statistics/Statistics";
import Blog from "./components/blog/Blog";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppliedJobs from "./components/appliedJobs/AppliedJobs";
import NotFound from "./components/notFound/NotFound";
import LoaderSpinner from "./components/loaderSpinner/LoaderSpinner";
import JobDetails from "./components/jobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
        loader: ({ params }) => fetch("/jobs.json"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/loader",
        element: <LoaderSpinner />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
