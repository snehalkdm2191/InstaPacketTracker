import React from "react";
import { useHistory } from "react-router-dom";
// assets
import welcomeBg from "../assets/img/welcome-bg-corner.png";

export default function WelcomePage() {
  const history = useHistory();
  return (
    <div className="welcome-section">
      <img className="welcome-bg" src={welcomeBg} alt="welcome bg" />
      <div className="welcome-content text-center">
        <h1>Insta Package Tracker</h1>
        {/* This can look better with 2 <p> tags */}
        <p>
          Many packages one tracker. <br /> Track all your packages in one
          place.
        </p>
        {/* Don't use uppercase on the JSX, use CSS to make stylinstic choices. */}
        <button
          className="btn btn-track"
          onClick={() => history.push("/parcels")}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Click here to start tracking your package.."
        >
          TRACK
        </button>
      </div>
    </div>
  );
}
