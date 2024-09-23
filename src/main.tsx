// React Router DOM
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Styles
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppCommonEntryPoint />
  </BrowserRouter>
);
