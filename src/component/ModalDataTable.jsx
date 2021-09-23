import React from "react";

export default function ModalDataTable({ parcel }) {
  return (
    <table>
      <tr>
        <td className="info-title">id: </td>
        <td>{parcel.id}</td>
      </tr>
      <tr>
        <td className="info-title">status: </td>
        <td>{parcel.status}</td>
      </tr>
      <tr>
        <td className="info-title">eta: </td>
        <td>{parcel.eta}</td>
      </tr>
      <tr>
        <td className="info-title">parcel_id: </td>
        <td>{parcel.parcel_id}</td>
      </tr>
      <tr>
        <td className="info-title">sender: </td>
        <td>{parcel.sender}</td>
      </tr>
      <tr>
        <td className="info-title">verification_required: </td>
        <td>{parcel.verification_required}</td>
      </tr>
      <tr>
        <td className="info-title">location_id: </td>
        <td>{parcel.location_id}</td>
      </tr>
      <tr>
        <td className="info-title">location_name: </td>
        <td>{parcel.location_name}</td>
      </tr>
      <tr>
        <td className="info-title">location_status_ok: </td>
        <td>{parcel.location_status_ok}</td>
      </tr>
      <tr>
        <td className="info-title">user_phone: </td>
        <td>{parcel.user_phone}</td>
      </tr>
      <tr>
        <td className="info-title">user_name: </td>
        <td>{parcel.user_name}</td>
      </tr>
      <tr>
        <td className="info-title">notes: </td>
        <td>{parcel.notes}</td>
      </tr>
      <tr>
        <td className="info-title">last_updated: </td>
        <td>{parcel.last_updated}</td>
      </tr>
    </table>
  );
}
