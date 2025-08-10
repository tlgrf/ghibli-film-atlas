import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Search from './pages/Search'
import FilmDetail from './pages/FilmDetail'
import Insights from './pages/Insights'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import './index.css'

// defining the application routes and their corresponding components
const router = createBrowserRouter([
  {
    element: <App />, // shared layout component
    children: [
      { path: '/', element: <Search /> },
      { path: '/film/:id', element: <FilmDetail /> },
      { path: '/insights', element: <Insights /> },
      { path: '/favorites', element: <Favorites /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

// mounting the application into the page
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)