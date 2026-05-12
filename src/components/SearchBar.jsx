import React from "react";

const SearchBar = ({ query, onQueryChange }) => {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
