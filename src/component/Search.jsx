import React, { useEffect, useState } from 'react';

function Search() {
  return (
    <>
      <input
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
