import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

function Home() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setCountries([]);
      setError(null);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);
      fetch(`https://restcountries.com/v3.1/name/${query}`)
        .then((res) => {
          if (!res.ok) throw new Error("Not found");
          return res.json();
        })
        .then((data) => {
          setCountries(data);
          setError(null);
        })
        .catch(() => {
          setCountries([]);
          setError("No countries found.");
        })
        .finally(() => setLoading(false));
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="home">
      <SearchBar query={query} onQueryChange={setQuery} />

      {/* Status messages */}
      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">{error}</p>}
      {!loading && !error && countries.length === 0 && !query && (
        <p className="status">Start searching to explore countries.</p>
      )}

      {/* Cards grid */}
      {!loading && !error && countries.length > 0 && (
        <div className="grid">
          {countries.map((country) => (
            <div key={country.cca3} className="card">
              <h2>{country.name.common}</h2>
              <p>Capital: {country.capital?.[0] || "N/A"}</p>
              <p>Population: {country.population?.toLocaleString() || "N/A"}</p>
              <img
                src={country.flags?.png}
                alt={`Flag of ${country.name.common}`}
                width="120"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
