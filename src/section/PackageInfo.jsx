import React from "react";
import { Link, useParams } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { listState } from "../state/listState";

export default function PackageInfo() {
  const { id } = useParams(); // url:id
  const [list, setList] = useRecoilState(listState);
  const parcelList = list.filter((li) => li.id === id);
  console.log(parcelList);
  return (
    <>
    hi
    </>
  );
}
