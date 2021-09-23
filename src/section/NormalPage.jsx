import React, { useEffect, useState } from "react";
//Component
import ParcelListItem from "../component/ParcelListItem";
import FilterButton from "../component/FilterButton";
import Sorter from "../component/Sorter";
import ParcelModal from "../component/ParcelModal";
import Search from "../component/Search";
// Custom JS Functions & Variables
import { dataSort } from "../scripts/sorterFunctions";
import storageKey from "../scripts/StorageKey";

export default function NormalPage({setModal}) {
  const [parcelListData, setParcelListData] = useState([]);
  const [displayedParcels, setDisplayedParcels] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("loading");
  
  useEffect(() => {
    fetch(storageKey)
      .then((response) => response.json())
      .then((data) => onSuccess(data))
      .catch((error) => setFetchStatus("error"));
  }, []);

  function onSuccess(data) {
    setParcelListData(data);
    setDisplayedParcels(dataSort(data, "id"));
    setFetchStatus("success");
  }

 const pacelDetails = displayedParcels.map((parcel) => {
    return (
      <ParcelListItem key={`${parcel.sender}-${parcel.id}`} parcel={parcel} onClick={() => setParcel(parcel)} />
    );
  });
  function setParcel(parcel) {
    setModal(<ParcelModal parcel={parcel} />);
  }

  return (
    <div className="body parcel-list-body">
      <div className="filter-and-search">
      <Search
          parcelArray={parcelListData}
          setDisplayedParcels={setDisplayedParcels}
        />
        <FilterButton
          parcelArray={parcelListData}
          setDisplayedParcels={setDisplayedParcels}
        />
      </div>
      <Sorter
        setDisplayedParcels={setDisplayedParcels}
        displayedParcels={displayedParcels}
      />
      {fetchStatus === "success" && pacelDetails}
    </div>
  );
}
