import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const ELementSetup = lazy(() => import("../pages/ElementSetup"));

const coreRoutes = [
  {
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/element/setup",
    title: "Element Setup",
    component: ELementSetup,
  },
];

const routes = [...coreRoutes];
export default routes;
