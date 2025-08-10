import { useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { fetchFilms } from '../utils/ghibli'
import { Link } from 'react-router-dom'
import FilmCard from '../components/FilmCard'
import { Loading, ErrorBlock, EmptyState } from '../components/StatusBlocks'

// page for favorite Ghibli films 
export default function Favorites() {
  const [favs, setFavs] = useLocalStorage('favs', [])
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    fetchFilms()
      .then((data) => active && setFilms(data))
      .catch((e) => active && setError(e.message))
      .finally(() => active && setLoading(false))
    return () => { active = false }
  }, [])

  if (loading) return <Loading />
  if (error) return <ErrorBlock error={error} onRetry={() => {
    setError(null); setLoading(true); fetchFilms().then(setFilms).catch(e=>setError(e.message)).finally(()=>setLoading(false))
  }} />

  const favFilms = films.filter((f) => favs.includes(f.id))
  if (!favFilms.length)
    return <EmptyState icon="☆" title="No favourites yet" action={<Link to="/" className="inline-flex px-4 py-2 rounded-md bg-ocean-600 text-white text-sm font-medium hover:bg-ocean-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400">Browse films</Link>}>
      Browse films and press the star to add them here.
    </EmptyState>

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {favFilms.map((f) => (
        <FilmCard key={f.id} film={f}>
          <button
            aria-label={`Remove ${f.title} from favourites`}
            onClick={() => setFavs(favs.filter((x) => x !== f.id))}
            className="text-sakura-600 hover:text-sakura-700 font-medium text-sm"
          >
            Remove
          </button>
        </FilmCard>
      ))}
    </ul>
  )
}