import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import routes from "./config/routes";
require("style!css!../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("style!css!../public/css/style.css");

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById("app")
);