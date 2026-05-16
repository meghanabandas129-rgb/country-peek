import { useState } from 'react'

import SearchBar from '../components/SearchBar'
import CountryCard from '../components/CountryCard'
import FilterBar from '../components/FilterBar'

function Home() {
  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState('All')
  const [sortBy, setSortBy] = useState('')

  const displayed = [...countries]
    .filter(
      (country) =>
        region === 'All' ||
        country.region === region
    )
    .sort((a, b) => {

      if (sortBy === 'name') {
        return a.name.common.localeCompare(
          b.name.common
        )
      }

      if (sortBy === 'population') {
        return b.population - a.population
      }

      return 0
    })

  return (
    <main className="home">

      <SearchBar setCountries={setCountries} />

      <FilterBar
        region={region}
        onRegionChange={setRegion}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {countries.length === 0 ? (
        <p className="placeholder">
          Search for a country to begin
        </p>
      ) : (
        <section className="cards-grid">

          {displayed.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
            />
          ))}

        </section>
      )}

    </main>
  )
}

export default Home