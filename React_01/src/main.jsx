import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Filter from "./Filter.jsx";
import ArrowMapEven from "./ArrowMapEven.jsx";
import ArrowFilterEven from "./ArrowFilterEven.jsx";
import PropsInput from "./PropsInput.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Filter />

    <ArrowMapEven></ArrowMapEven>

    <ArrowFilterEven></ArrowFilterEven>

    <PropsInput></PropsInput>
  </StrictMode>
);
