import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "heading",
    style: { color: "grey" },
  },
  "Hello world from React"
);
const subHeading = React.createElement(
  "h2",
  {
    id: "subHeading",
    style: { color: "purple" },
  },
  "Learing React"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, subHeading]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
