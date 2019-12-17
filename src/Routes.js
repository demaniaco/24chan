import React from "react";
import { HomePage } from "./page/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { TablonPage } from "./page/tablon";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/anime" component={TablonPage} />
      {/* <Route path="/board" component={Boards} /> */}
    </Router>
  );
};

export default Routes;
