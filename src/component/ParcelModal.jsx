import React, { useState } from "react";
//component
import ModalDataTable from "./ModalDataTable";

export default function ProjectModal({ parcel }) {
  const [zoom] = useState(4);
  const options = `&output=embed&z=${zoom}`;
  const googleMaps = `https://maps.google.com/maps?q=${parcel.location_coordinate_latitude},${parcel.location_coordinate_longitude}&hl=en&z=14&amp${options}`;
  return (
    <div className="container">
      <div className="row">
        <h3>Parcel Details</h3>
        <div className="col-md-6">
          <ModalDataTable parcel={parcel} />
        </div>
        <div className="col-md-6">
          <div id="frame-container">
            <iframe className="map-frame" src={googleMaps} title="Insta track map"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
