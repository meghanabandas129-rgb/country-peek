import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import CountryCard from '../components/CountryCard'

function Favourites() {
  const { favourites } = useFavourites()

  if (favourites.length === 0) {
    return (
      <div className="empty-state">
        <h2>No favourites saved yet</h2>

        <p>
          Start exploring countries and save some.
        </p>

        <Link to="/">Go Back Home</Link>
      </div>
    )
  }

  return (
    <div className="cards-grid">
      {favourites.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
        />
      ))}
    </div>
  )
}

export default Favourites