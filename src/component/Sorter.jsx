import { useState } from "react";

// functions
import { dataSort, reverseSort } from "../scripts/SorterFunctions";

export default function Sorter({ setDisplayedParcels, displayedParcels }) {
  // Local state
  const [sortDirection, setSortDirection] = useState({ id: "down" });

  // Methods
  function sortHandler(sortType) {
    if (sortDirection[sortType] === "down") {
      setSortDirection({ [sortType]: "up" });
      setDisplayedParcels(reverseSort(displayedParcels, sortType));
    } else {
      setSortDirection({ [sortType]: "down" });
      setDisplayedParcels(dataSort(displayedParcels, sortType));
    }
  }

  return (
    <div className="sort-buttons">
      <button className="s-button" onClick={() => sortHandler("id")}>
        Sort By ID{" "}
        <i className={`fas fa-chevron-${sortDirection["id"]}`} />
      </button>
      <button
        className="s-button sc-button"
        onClick={() => sortHandler("location_name")}
      >
        Sort By Location{" "}
        <i className={`fas fa-chevron-${sortDirection["location_name"]}`} />
      </button>
      <button className="s-button" onClick={() => sortHandler("status")}>
        Sort By Status{" "}
        <i className={`fas fa-chevron-${sortDirection["status"]}`} />
      </button>
    </div>
  );
}
