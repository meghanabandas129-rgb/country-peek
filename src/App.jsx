import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import CountryDetail from './pages/CountryDetail'
import Favourites from './pages/Favourites'

import Header from './components/Header'

import './App.css'

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/country/:cca3"
            element={<CountryDetail />}
          />

          <Route
            path="/favourites"
            element={<Favourites />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App