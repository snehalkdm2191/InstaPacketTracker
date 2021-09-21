import React from 'react';
import { useHistory } from 'react-router-dom';
// Components

export default function WelcomePage() {
  const history = useHistory();
  return (
    <div className="body home-body">
      <button onClick={() => history.push('/parcels')} className="start-button">
        TRACK
      </button>
    </div>
  );
}
