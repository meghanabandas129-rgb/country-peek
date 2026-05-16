import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import './index.css'

import { ThemeProvider } from './context/ThemeContext'
import { FavouritesProvider } from './context/FavouritesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <FavouritesProvider>
          <App />
        </FavouritesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)