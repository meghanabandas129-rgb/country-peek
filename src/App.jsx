import React, { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  const searchCountry = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${query}`);
      const data = await res.json();
      setCountries(data); // store all matches
    } catch (err) {
      console.error("Error fetching countries:", err);
      setCountries([]);
    }
  };

  return (
    <div className="app">
      <h1>Country Peek</h1>
      <input
        type="text"
        placeholder="Enter country name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchCountry}>Search</button>

      <div className="grid">
        {countries.map((country) => (
          <div key={country.cca3} className="card">
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital?.[0]}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              width="120"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
