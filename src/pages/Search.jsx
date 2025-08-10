import { useEffect, useMemo, useState } from 'react'
import { fetchFilms } from '../utils/ghibli'
import FilmCard from '../components/FilmCard'
import { Loading, ErrorBlock, EmptyState } from '../components/StatusBlocks'

// search page for Ghibli films
export default function Search() {
  const [q, setQ] = useState('')
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

  // filtered list of films based on the current search query
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return films
    return films.filter((f) =>
      [f.title, f.original_title, f.director, f.producer, f.description]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(s)),
    )
  }, [q, films])

  if (loading) return <Loading />
  if (error) return <ErrorBlock error={error} onRetry={() => {
    setError(null); setLoading(true); fetchFilms().then(setFilms).catch(e=>setError(e.message)).finally(()=>setLoading(false))
  }} />

  return (
    <div className="space-y-6">
      <section className="flex flex-col items-center text-center pt-2">
        <img
          src="/sc23.gif"
          alt="Studio Ghibli inspired animated banner"
          className="h-64 w-auto rounded-xl border border-mist-200 shadow-md object-cover"
          loading="lazy"
        />
        <h1 className="mt-4 text-3xl font-semibold tracking-tight bg-gradient-to-r from-sakura-500 to-sakura-700 bg-clip-text text-transparent">
          Ghibli Film Atlas
        </h1>
        <p className="mt-2 text-sm text-sakura-100">
          Discover the magical world of Studio Ghibli films.
        </p>
      </section>
      <div className="mb-2 max-w-xl mx-auto w-full">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search title, director, description…"
          className="w-full p-2 border border-mist-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-300/50 rounded bg-white/80 backdrop-blur transition"
        />
      </div>
      {filtered.length === 0 ? (
        <EmptyState icon="🔍" title="No matches">
          Adjust your search or clear the box to see all films.
        </EmptyState>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {filtered.map((f) => (
            <FilmCard key={f.id} film={f} />
          ))}
        </ul>
      )}
    </div>
  )
}