// Components
import { Dashboard } from "@/modules/dashboard/views/dashboard-main";

// React Router DOM
import { RouteObject } from "react-router-dom";

const useAppRoutes = (): RouteObject[] => {
  return [
    {
      path: "/",
      element: <Dashboard />,
    },
  ];
};

export { useAppRoutes };
