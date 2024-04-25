import React from "react";
import { hydrateRoot } from "react-dom/client";
import { Render } from "./Render.jsx";

document.addEventListener("DOMContentLoaded", function () {
    hydrateRoot(document.getElementById("root"), <Render />);
  });