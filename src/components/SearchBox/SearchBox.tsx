import React, { useState } from "react";

import "./SearchBox.scss";

interface SearchBoxProps {
  searchValue: string,
  setSearchValue(arg0: string): any
}

export const SearchBox: React.FC<SearchBoxProps> = (props: any) => {

  const handleChange = (e: any) => {
    props.setSearchValue(e.target.value);
  }




  return (
    <div className="search-box">
      <input value={props.searchValue} onChange={handleChange} />
    </div>
  );
};
