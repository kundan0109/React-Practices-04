import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Task01 from "./Task01";
import Task02 from "./Task02";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Task01 /> */}
    <Task02></Task02>
  </StrictMode>
);
 