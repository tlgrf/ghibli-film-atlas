import { NavLink, Outlet } from 'react-router-dom'

// The root layout component defines the overall page chrome
// a header with navigation links and a main area where
// child routes will be rendered via the <Outlet> component
const nav = 'px-3 py-1 rounded hover:bg-gray-100'
const active = 'font-semibold underline'

export default function App() {
  return (
    <div className="min-h-screen bg-moss-700 text-ocean-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-ocean-700 text-white px-3 py-2 rounded-md shadow">
        Skip to content
      </a>
      <header className="p-4 shadow bg-white/90 backdrop-blur border-b border-mist-200">
        <nav className="max-w-5xl mx-auto flex items-center gap-4" aria-label="Primary">
          <div className="flex items-center gap-2 mr-2">
            <img
              src="/sc23.gif"
              alt="Studio Ghibli themed animated header"
              className="h-10 w-auto rounded-md border border-mist-200 shadow-sm object-cover"
              loading="lazy"
            />
            <span className="font-semibold text-ocean-700 hidden sm:inline">🪄 Ghibli Film Atlas 🎬</span>
          </div>
          <NavLink to="/" className={({ isActive }) => `${nav} ${isActive ? active : ''}`} end>Search</NavLink>
          <NavLink to="/insights" className={({ isActive }) => `${nav} ${isActive ? active : ''}`}>Insights</NavLink>
          <NavLink to="/favorites" className={({ isActive }) => `${nav} ${isActive ? active : ''}`}>Favorites</NavLink>
        </nav>
      </header>
      <main id="main" className="max-w-5xl mx-auto p-4" role="main">
        <Outlet />
      </main>
    </div>
  )
}