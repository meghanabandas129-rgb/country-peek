import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'

function CountryCard({ country }) {
  const {
    name,
    flags,
    population,
    region,
    capital,
    cca3,
  } = country

  const { favourites, dispatch } = useFavourites()

  const isSaved = favourites.some(
    (fav) => fav.cca3 === cca3
  )

  return (
    <Link to={`/country/${cca3}`} className="country-card">
      <img
        src={flags?.png}
        alt={name?.common}
        className="country-flag"
      />

      <div className="card__body">
        <h2>{name?.common}</h2>

        <p>
          <strong>Population:</strong>{' '}
          {population.toLocaleString()}
        </p>

        <p>
          <strong>Region:</strong> {region}
        </p>

        <p>
          <strong>Capital:</strong>{' '}
          {capital?.[0] || 'N/A'}
        </p>

        <button
          className={`fav-btn ${
            isSaved ? 'fav-btn--saved' : ''
          }`}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()

            if (isSaved) {
              dispatch({
                type: 'REMOVE_FAVOURITE',
                payload: cca3,
              })
            } else {
              dispatch({
                type: 'ADD_FAVOURITE',
                payload: country,
              })
            }
          }}
        >
          {isSaved ? '♥ Saved' : '♡ Save'}
        </button>
      </div>
    </Link>
  )
}

export default CountryCard