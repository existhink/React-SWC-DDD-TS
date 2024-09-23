// React Router DOM
import { RouteObject } from "react-router-dom";

// UI
import { Dashboard } from "../views/dashboard-main";

export const useDashboardRouter = (): RouteObject[] => {
  return [
    {
      path: "dashboard",
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
  ];
};
