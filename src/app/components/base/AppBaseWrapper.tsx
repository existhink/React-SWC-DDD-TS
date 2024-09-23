// React
import { memo } from "react";

// React Router DOM
import { Outlet } from "react-router-dom";

export const AppBaseWrapper = memo(() => {
  return <Outlet />;
});
