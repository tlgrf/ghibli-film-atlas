// Utility functions for interacting with the Studio Ghibli API.
// The API is hosted on Vercel at https://ghibliapi.vercel.app and exposes
// resources such as /films, /people, /locations, etc. For this project
// I only need the /films endpoints. See https://ghibliapi.vercel.app/#/ for details.

export const API_BASE = 'https://ghibliapi.vercel.app'

// Very small in memory cache to avoid refetching
// identical resources during a single browsing session.
const _cache = new Map()

async function get(path) {
  if (_cache.has(path)) return _cache.get(path)
  const res = await fetch(`${API_BASE}${path}`)
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  const data = await res.json()
  _cache.set(path, data)
  return data
}

// Fetch all films. Returns an array of film objects.
export const fetchFilms = () => get('/films')

// Fetch a single film by id. Returns an individual film object.
export const fetchFilm = (id) => get(`/films/${id}`)

// Expose a way to prime or clear cache (optional future use)
export function clearGhibliCache() { _cache.clear() }