import React, { useEffect, useState } from "react";
//functions
import { dataFilter } from "../scripts/filterFunction";
import { dataSort } from "../scripts/sorterFunctions";

export default function Search({ parcelArray, setParcelArray }) {
  const [searchState, setSearchState] = useState({
    searchTerm: "",
  });

  useEffect(() => {
    const filteredArray = dataFilter(
      parcelArray,
      "parcel_id",
      "sender",
      searchState.searchTerm
    );
    const sortedArray = dataSort(filteredArray, "id");
    setParcelArray(sortedArray);
  }, [searchState]);

  const inputHandler = (e) => {
    const searchString = e.target.value;
    setSearchState({ searchTerm: searchString });
  };
  return (
    <>
      <input
        onChange={inputHandler}
        icon="search"
        type="text"
        autoComplete="off"
        className="live-search-field"
        placeholder="Search by ID or Sender?"
      />
    </>
  );
}
