import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootDOMElement = document.getElementById("root");
const root = createRoot(rootDOMElement);

root.render(<App />);
