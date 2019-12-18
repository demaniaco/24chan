import React from "react";
import Routes from "./Routes";
import "./App.css";
import { TablonPage } from "./page/tablon";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
