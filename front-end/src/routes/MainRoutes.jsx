// imports
import MainLayout from "../layout/MainLayout"
import { lazy } from "react";

// pages
const Dashboard = lazy(() => import("../pages/dashboard"));
const ManageAccounts = lazy(() => import("../pages/manage-account"));
const ManageArea = lazy(() => import("../pages/manage-area"));
const PatientData = lazy(() => import("../pages/patient-data"));
const PredictiveAnalytics = lazy(() => import("../pages/predictive-analytics"));
//main routes
const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
        index: true,
        element: <Dashboard />
    },
    {
      path: "dashboard",
      element: <Dashboard />
    },
    {
      path: "manage-account",
      element: <ManageAccounts />
    },
    {
      path: "manage-area",
      element: <ManageArea />
    },
    {
      path: "patient-data",
      element: <PatientData />
    },
    {
      path: "predictive-analytics",
      element: <PredictiveAnalytics />
    }
  ]
};

export default MainRoutes;
