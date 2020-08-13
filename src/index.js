import React from "react";
import ReactDOM from "react-dom";
import "styles/index.scss";
import "styles/variables.scss";
import Feed from "./views/Feed/Feed.js";

ReactDOM.render(<React.StrictMode>
  <Feed />
</React.StrictMode>,
document.getElementById("root"));
