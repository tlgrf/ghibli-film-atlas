import { useEffect, useState } from 'react'
import { fetchFilms } from '../utils/ghibli'
import { motifCounts } from '../utils/motifs'
import { avgRuntimeByDirector } from '../utils/stats'
import { Loading, ErrorBlock } from '../components/StatusBlocks'

// page shows short info about all films
export default function Insights() {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    const run = () => {
      setLoading(true)
      setError(null)
      fetchFilms()
        .then((data) => active && setFilms(data))
        .catch((e) => active && setError(e.message))
        .finally(() => active && setLoading(false))
    }
    run()
    return () => { active = false }
  }, [])

  if (loading) return <Loading />
  if (error) return <ErrorBlock error={error} onRetry={() => {
    setError(null); setLoading(true); fetchFilms().then(setFilms).catch(e=>setError(e.message)).finally(()=>setLoading(false))
  }} />

  const motifs = motifCounts(films)
  const runtimes = avgRuntimeByDirector(films)
  const maxMotif = Math.max(...Object.values(motifs || { x: 1 }))

  return (
    <div className="grid gap-6">
      <section className="p-5 rounded-xl shadow bg-white/90 border border-mist-200">
        <h2 className="font-semibold text-lg mb-2 text-ocean-700">Motif frequency (all films)</h2>
        <ul>
          {Object.entries(motifs)
            .sort((a, b) => b[1] - a[1])
            .map(([k, v]) => (
              <li key={k} className="flex items-center gap-2 my-1 text-sm">
                <span className="w-40 capitalize text-soot-700">
                  {k.replaceAll('_', ' ')}
                </span>
                <div className="flex-1 h-2 bg-mist-200 rounded overflow-hidden">
                  <div
                    className="h-2 rounded bg-gradient-to-r from-skyx-300 via-ocean-400 to-moss-500"
                    style={{ width: `${(v / maxMotif) * 100}%` }}
                  />
                </div>
                <span className="w-10 text-right">{v}</span>
              </li>
            ))}
        </ul>
      </section>

      <section className="p-5 rounded-xl shadow bg-white/90 border border-mist-200">
        <h2 className="font-semibold text-lg mb-2 text-ocean-700">Average runtime by director</h2>
        <ul>
          {Object.entries(runtimes)
            .sort((a, b) => b[1] - a[1])
            .map(([k, v]) => (
              <li key={k} className="flex justify-between my-1 text-sm">
                <span className="font-medium text-soot-700">{k}</span>
                <span className="tabular-nums text-ocean-700">{v.toFixed(1)} min</span>
              </li>
            ))}
        </ul>
      </section>
    </div>
  )
}