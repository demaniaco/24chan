import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./page/home";
import Boards from "./components/boards/boards";

const Routes = () => {
    return
    <switch>
        <Route exact path='/' component={HomePage } />
        <Route exact path='/anime ' component={ Boards } />
    </switch>
}