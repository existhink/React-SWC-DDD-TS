import { useAppRoutes } from "@/app/routes/app.routes";
import { useDashboardRouter } from "@/modules/dashboard/router/dashboard.router";
import { useRoutes } from "react-router-dom";

const useRouter = () => {
  const app = useAppRoutes();
  const dashboard = useDashboardRouter();
  const routes = useRoutes([...app, ...dashboard]);

  return routes;
};

export { useRouter };
