import React from "react";
//functions
import { dataFilter } from "../scripts/filterFunction";
import { dataSort } from "../scripts/sorterFunctions";

export default function FilterButton({parcelArray, setDisplayedParcels}) {
  function clickHandler(filterType) {
    let filteredArray;
    if (filterType === 'all') {
      filteredArray = parcelArray;
    } else {
      filteredArray = dataFilter(parcelArray, 'status', filterType);
    }
    setDisplayedParcels(dataSort(filteredArray, 'parcel_id'));
  }
  return (
    <div class="dropdown">
      <button
        className="button"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter by Status
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li onClick={() => clickHandler("all")}>All</li>
        <li onClick={() => clickHandler('order-info-received')}>Order Info Received</li>
        <li onClick={() => clickHandler('ready-for-pickup')}>Ready For Pickup</li>
        <li onClick={() => clickHandler('on-the-way')}>On The Way</li>
        <li onClick={() => clickHandler('delivered')}>Delivered</li>
      </ul>
    </div>
  );
}
