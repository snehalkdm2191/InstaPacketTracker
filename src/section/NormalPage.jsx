import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

//Component
import ParcelListItem from '../component/ParcelListItem';
import Search from '../component/Search.jsx';
import FilterButton from '../component/FilterButton';
import Sorter from "../component/Sorter";

// Custom JS Functions & Variables
import { dataSort } from '../scripts/sorterFunctions';

//State
import { listState } from '../state/listState';

export default function NormalPage() {
    const [parcelListData, setParcelListData] = useRecoilState(listState);
    const [displayedParcels, setDisplayedParcels] = useState([]);
    const [fetchStatus, setFetchStatus] = useState('loading');
    const instaOrders = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  
    // API call to populate parcel arrays.
    useEffect(() => {
      const abortFetch = new AbortController();
      const fetchData = async () => {
        try {
          const response = await fetch(instaOrders, {
            mode: 'cors',
            signal: abortFetch.signal
          });
          const parsedData = await response.json();
          setParcelListData(parsedData);
          setDisplayedParcels(dataSort(parsedData, 'parcel_id'));
          setFetchStatus('success');
        } catch (error) {
          setFetchStatus('error');
          console.log(error);
        }
      };
      fetchData();
      return () => abortFetch.abort();
    }, [instaOrders, setParcelListData]);
  
    const jsxParcels = displayedParcels.map(parcel => {
      return <ParcelListItem key={`${parcel.sender}-${parcel.id}`} parcel={parcel} />;
    });
  
    return (
      <div className="body parcel-list-body">
        <div className="filter-and-search">
          <Search
            parcelArray={parcelListData}
            setParcelArray={setDisplayedParcels}
          />
        </div>
        <FilterButton parcelArray={parcelListData} setDisplayedParcels={setDisplayedParcels} />
        <Sorter setDisplayedParcels={setDisplayedParcels} displayedParcels={displayedParcels}/>
        {fetchStatus === 'success' && jsxParcels}
      </div>
    );
}
