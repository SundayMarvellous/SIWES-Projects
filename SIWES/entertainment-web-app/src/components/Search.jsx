import React, { useState } from "react";
import { ReactComponent as Searchicon } from "../assets/Search.icon.svg";

function Search({ data, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };
  // food;

  return (
    <div className="Search">
      <Searchicon />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="Search-input"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
    </div>
  );
}

export default Search;
