// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { yArray } from "./Yjsdoc";
import { v4 as uuidv4 } from "uuid";

function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: uuidv4(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    numPoints: 5,
    innerRadius: 20,
    outerRadius: 40,
    fill: "#000000",
    opacity: 0.8,
    shadowColor: "black",
    shadowBlur: 10,
    shadowOpacity: 0.6,
    isDragging: false,
  }));
}
yArray.delete(0, yArray.length);
if (yArray.length === 0) {
  yArray.insert(0, generateShapes());
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
