"use client";
import TextSearchInput from "@/stories/atoms/Input/TextSearchInput";
import React from "react";

type SearchAreaProps = {};

const SearchArea = ({}: SearchAreaProps) => {
  return (
    <div className=" flex items-center gap-2">
      <TextSearchInput name="query" defaultColor="gray" placeholder="검색" />
    </div>
  );
};

export default SearchArea;
