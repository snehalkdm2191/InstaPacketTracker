/* eslint-disable react-hooks/exhaustive-deps */
// React Libraries
import React, { useEffect, useState } from 'react';
import { searchFilter } from '../scripts/filterFunction';
import { dataSort } from '../scripts/sorterFunctions';

function Search({ parcelArray, setDisplayedParcels }) {
  const [searchState, setSearchState] = useState({
    searchTerm: ''
  });

  useEffect(() => {
    const filteredArray = searchFilter(
      parcelArray,
      'parcel_id',
      'sender',
      searchState.searchTerm
    );
      const sortedArray = dataSort(filteredArray, 'parcel_id');
      setDisplayedParcels(sortedArray);
  }, [searchState]);

  const inputHandler = e => {
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

export default Search;
