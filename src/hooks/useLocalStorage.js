import { useEffect, useState } from 'react'
/* global localStorage */

/**
 * Persist a stateful value to localStorage. When the hook first runs it
 * attempts to hydrate from storage; later updates automatically write
 * the JSON‑stringified value back under the same key. Returns the
 * familiar [value, setValue] tuple from useState.
 * @param {string} key Storage key
 * @param {*} initial Fallback value when nothing stored
 */
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : initial
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}