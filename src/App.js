import "./assets/styles/App.scss";
import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//section
import WelcomePage from "./section/WelcomePage";
import NormalPage from "./section/NormalPage";
import PackageInfo from "./section/PackageInfo";
import Modal from "./component/Modal";

export default function App() {
  const [modal, setModal] = useState(null);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/parcels">
            <NormalPage setModal={setModal} />
          </Route>
          <Route path="/parcel/:id">
            <PackageInfo />
          </Route>
        </Switch>
      </Router>
      <Modal state={[modal, setModal]} />
    </div>
  );
}
