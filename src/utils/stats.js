/**
 * Compute the average runtime per director across an array of films. Each
 * film object is expected to have `director` and `running_time` fields.
 * Invalid or missing runtimes will be ignored in the average
 *
 * @param {Array<{director: string, running_time: string|number}>} films
 * @returns {Record<string, number>} mapping director to average runtime in minutes
 */
export function avgRuntimeByDirector(films) {
  const sums = {}
  const counts = {}
  for (const f of films) {
    const d = f.director || 'Unknown'
    const rt = Number(f.running_time) || 0
    sums[d] = (sums[d] || 0) + rt
    counts[d] = (counts[d] || 0) + (rt ? 1 : 0)
  }
  const out = {}
  for (const d of Object.keys(sums)) {
    out[d] = counts[d] ? sums[d] / counts[d] : 0
  }
  return out
}