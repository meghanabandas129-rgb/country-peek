function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;