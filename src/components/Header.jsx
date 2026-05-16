import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <h1>CountryPeek</h1>

      <nav>
        <Link to="/">Home</Link>

        <Link to="/favourites">
          Favourites
        </Link>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {theme === 'light'
            ? '🌙 Dark Mode'
            : '☀ Light Mode'}
        </button>
      </nav>
    </header>
  )
}

export default Header