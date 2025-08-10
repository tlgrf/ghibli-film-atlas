import { describe, test, expect } from 'vitest'
import { extractMotifs, motifCounts } from '../motifs'

describe('motifs utilities', () => {
  test('extractMotifs finds expected motif keys', () => {
    const desc = 'A young girl finds a forest spirit and discovers flight over the sea.'
    const motifs = extractMotifs(desc)
    // Expect at least environment (forest/sea), flight, folklore (spirit), coming_of_age (girl)
    expect(motifs).toEqual(expect.arrayContaining(['environment', 'flight', 'folklore', 'coming_of_age']))
  })

  test('motifCounts tallies correctly', () => {
    const films = [
      { description: 'forest spirit flight' },
      { description: 'flight over forest' },
      { description: 'war and conflict in the forest' },
    ]
    const counts = motifCounts(films)
    expect(counts.environment).toBeGreaterThanOrEqual(2)
    expect(counts.flight).toBe(2)
    expect(counts.war).toBe(1)
  })
})
