import React, { useState } from "react";
//component
import ModalDataTable from "./ModalDataTable";

export default function ProjectModal({ parcel }) {
  const [zoom, setZoom] = useState(4);
  const options = `&output=embed&z=${zoom}`;
  const googleMaps = `https://maps.google.com/maps?q=${parcel.location_coordinate_latitude},${parcel.location_coordinate_longitude}&hl=en&z=14&amp${options}`;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ModalDataTable parcel={parcel} />
        </div>
        <div className="col-md-6">
          <div id="frame-container">
            <iframe className="map-frame" src={googleMaps}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
