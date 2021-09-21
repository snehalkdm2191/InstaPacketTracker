// React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

export default function ParcelListItem({ parcel }) {
  const { status, parcel_id, location_name, sender } = parcel;

  return (
    <Link to={`/parcel/${parcel_id}`}>
      <div className="parcel-item-div">
        <span className="pl-item">
          <div className="pl-head">Parcel ID:</div>
          <div>{parcel_id}</div>
        </span>
        <span className="pl-item">
          <div className="pl-head">Sender:</div>
          <div>{sender}</div>
        </span>
        <span className="pl-item">
          <div className="pl-head">Location:</div>
          <div>{location_name}</div>
        </span>
        <span className="pl-item">
          <div className="pl-head">Status:</div>
          <div>{status}</div>
        </span>
      </div>
    </Link>
  );
}