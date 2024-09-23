// Plugins
import { useRouter } from "@/plugins";

// React
import { Suspense } from "react";

export const AppCommonEntryPoint = () => {
  const routes = useRouter();

  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
};
