import { useState } from 'react'

function SearchBar({ setCountries }) {
  const [query, setQuery] = useState('')

  async function handleSearch(event) {
    const value = event.target.value

    setQuery(value)

    if (value.trim() === '') {
      setCountries([])
      return
    }

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${value}`
      )

      if (!response.ok) {
        setCountries([])
        return
      }

      const data = await response.json()

      setCountries(data)
    } catch (error) {
      console.log(error)
      setCountries([])
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={handleSearch}
        className="search-bar__input"
      />
    </div>
  )
}

export default SearchBar