function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search for a country..."
        aria-label="Search for a country"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar