import { Link } from 'react-router-dom'

// Reusable film card with optional actions area
export function FilmCard({ film, children, detailLink = true }) {
  return (
    <li className="card">
      <h3 className="font-semibold text-lg text-ocean-700">
        {film.title}{' '}
        <span className="text-sm opacity-70">({film.release_date})</span>
      </h3>
      <p className="text-sm mt-1 overflow-hidden h-24">{film.description}</p>
      <div className="mt-2 text-sm opacity-80 text-soot-600">
        Director: {film.director} • {film.running_time} min
      </div>
      <div className="mt-3 flex items-center gap-4">
        {detailLink && (
          <Link
            to={`/film/${film.id}`}
            className="text-ocean-600 hover:text-ocean-700 font-medium"
          >
            Details →
          </Link>
        )}
        {children}
      </div>
    </li>
  )
}

export default FilmCard
