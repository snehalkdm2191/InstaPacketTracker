import React, { useEffect, useState } from "react";
//Component
import ParcelListItem from "../component/ParcelListItem";
import FilterButton from "../component/FilterButton";
import Sorter from "../component/Sorter";
import ParcelModal from "../component/ParcelModal";
import Search from "../component/Search";
// Custom JS Functions & Variables
import { dataSort } from "../scripts/SorterFunctions";
import storageKey from "../scripts/StorageKey";
//data
import BackUpData from "../data/insta-orders.json";

export default function NormalPage({setModal}) {
  const [parcelListData, setParcelListData] = useState([]);
  const [displayedParcels, setDisplayedParcels] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("loading");
  
  useEffect(() => {
    fetch(storageKey)
      .then((response) => response.json())
      .then((data) => onSuccess(data))
      .catch((error) => onFail(error));
  }, []);

  function onSuccess(data) {
    setParcelListData(data);
    setDisplayedParcels(dataSort(data, "parcel_id"));
    setFetchStatus("success");
  }

  function onFail(error) {
    setParcelListData(BackUpData); // Back up plan in case of issue
    setDisplayedParcels(dataSort(BackUpData, "parcel_id"));
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
    <div className="parcel-list-body">
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
