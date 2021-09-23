import React from "react";

export default function ModalDataTable({ parcel }) {
  return (
    <table>
      <tr>
        <td>id</td>
        <td>{parcel.id}</td>
      </tr>
      <tr>
        <td>status</td>
        <td>{parcel.status}</td>
      </tr>
      <tr>
        <td>eta</td>
        <td>{parcel.eta}</td>
      </tr>
      <tr>
        <td>parcel_id</td>
        <td>{parcel.parcel_id}</td>
      </tr>
      <tr>
        <td>sender</td>
        <td>{parcel.sender}</td>
      </tr>
      <tr>
        <td>verification_required</td>
        <td>{parcel.verification_required}</td>
      </tr>
      <tr>
        <td>location_id</td>
        <td>{parcel.location_id}</td>
      </tr>
      <tr>
        <td>location_name</td>
        <td>{parcel.location_name}</td>
      </tr>
      <tr>
        <td>location_coordinate_latitude</td>
        <td>{parcel.location_coordinate_latitude}</td>
      </tr>
      <tr>
        <td>location_coordinate_longitude</td>
        <td>{parcel.location_coordinate_longitude}</td>
      </tr>
      <tr>
        <td>location_status_ok</td>
        <td>{parcel.location_status_ok}</td>
      </tr>
      <tr>
        <td>user_phone</td>
        <td>{parcel.user_phone}</td>
      </tr>
      <tr>
        <td>user_name</td>
        <td>{parcel.user_name}</td>
      </tr>
      <tr>
        <td>notes</td>
        <td>{parcel.notes}</td>
      </tr>
      <tr>
        <td>last_updated</td>
        <td>{parcel.last_updated}</td>
      </tr>
    </table>
  );
}
