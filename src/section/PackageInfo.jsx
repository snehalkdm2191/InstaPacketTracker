import React from "react";
import { Link, useParams } from "react-router-dom"; // not unused imports -1
import { useRecoilState } from "recoil";
import { listState } from "../state/listState";

export default function PackageInfo() {
  const { id } = useParams(); // url:id // not neccesary this is a react-router-dom convention, is well understood

  const [list, setList] = useRecoilState(listState); // no unused variables in this case the setter
  const parcelList = list.filter((li) => li.id === id);

  // -1 no comments in production
  console.log(parcelList);

  return <>hi</>;
}
