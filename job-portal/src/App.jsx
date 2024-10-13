import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Layout/app-layout";
import LandingPage from "./Pages/landing-page";
import OnboardingPage from "./Pages/onboardingPage";
import { JobListing } from "./Pages/job-listing";
import Job from "./Pages/job";
import { SavedJob } from "./Pages/saved-job";
import PostJob from "./Pages/post-job";
import MyJob from "./Pages/my-job";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <OnboardingPage />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/job/:id",
        element: <Job />,
      },
      {
        path: "/saved-job",
        element: <SavedJob />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJob />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
