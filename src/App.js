import "./assets/css/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//section
import WelcomePage from "./section/WelcomePage";
import NormalPage from "./section/NormalPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/parcels">
              <NormalPage />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
