import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFilm } from '../utils/ghibli'
import { extractMotifs } from '../utils/motifs'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Loading, ErrorBlock } from '../components/StatusBlocks'

// detailed view for one film
export default function FilmDetail() {
  const { id } = useParams()
  const [film, setFilm] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [favs, setFavs] = useLocalStorage('favs', [])

  const isFav = favs.includes(id)
  const toggleFav = () =>
    setFavs(isFav ? favs.filter((x) => x !== id) : [...favs, id])

  useEffect(() => {
    let active = true
    const run = () => {
      setLoading(true)
      setError(null)
      fetchFilm(id)
        .then((data) => active && setFilm(data))
        .catch((e) => active && setError(e.message))
        .finally(() => active && setLoading(false))
    }
    run()
    return () => {
      active = false
    }
  }, [id])

  if (loading) return <Loading />
  if (error)
    return (
      <ErrorBlock
        error={error}
        onRetry={() => {
          setError(null)
          setLoading(true)
          fetchFilm(id)
            .then(setFilm)
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false))
        }}
      />
    )
  if (!film) return null

  const motifs = extractMotifs(film.description)

  return (
    <article className="prose max-w-none" role="main">
      <h1 className="text-ocean-700">
        {film.title} ({film.release_date})
      </h1>
      <button
        aria-pressed={isFav}
        onClick={toggleFav}
        className={`mt-2 px-4 py-1.5 rounded-md border text-sm font-medium transition shadow-sm hover:shadow bg-white/80 backdrop-blur ${isFav ? 'border-sakura-400 text-sakura-700 hover:bg-sakura-50' : 'border-moss-300 text-moss-700 hover:bg-moss-50'}`}
      >
        {isFav ? '★ In Favourites' : '☆ Add to Favourites'}
      </button>
      <p className="mt-4 leading-relaxed bg-white/70 p-4 rounded-lg border border-mist-200 text-soot-700 shadow-sm">
        {film.description}
      </p>
      <ul className="list-disc ml-5 mt-4">
        <li>
          <b>Director:</b> {film.director}
        </li>
        <li>
          <b>Producer:</b> {film.producer}
        </li>
        <li>
          <b>Runtime:</b> {film.running_time} min
        </li>
        <li>
          <b>Score:</b> {film.rt_score}
        </li>
      </ul>
      <h2 className="mt-6 font-semibold text-ocean-700">Motifs detected</h2>
      {motifs.length ? (
        <ul className="list-disc ml-5 grid grid-cols-2 gap-x-4 gap-y-1 max-w-md">
          {motifs.map((m) => (
            <li key={m} className="capitalize text-sm px-2 py-1 rounded bg-mist-200/70 border border-mist-300">
              {m.replaceAll('_', ' ')}
            </li>
          ))}
        </ul>
      ) : (
        <p className="italic">No motifs found.</p>
      )}
    </article>
  )
}