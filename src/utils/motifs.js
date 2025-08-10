// Defined a set of simple motifs to detect within film descriptions. Each motif
// maps to an array of keywords that will be searched for in the description.
const MOTIFS = {
  environment: ['forest', 'nature', 'river', 'sea', 'ocean', 'pollution', 'spirit', 'wind', 'earth'],
  flight: ['flight', 'fly', 'flying', 'air', 'sky', 'plane', 'broom'],
  coming_of_age: ['coming of age', 'grow', 'growth', 'mature', 'child', 'girl', 'boy', 'young'],
  war: ['war', 'conflict', 'battle', 'army', 'soldier'],
  folklore: ['spirit', 'god', 'witch', 'curse', 'spell', 'demon'],
  friendship: ['friend', 'compan', 'together', 'help'],
  industrialization: ['factory', 'mining', 'industrial', 'rail', 'steam', 'machine'],
}

/**
 * Parse the supplied text and return an array of motif keys that match.
 * A motif matches if any of its associated keywords are found in the text.
 *
 * @param {string} text
 * @returns {string[]}
 */
export function extractMotifs(text = '') {
  const t = text.toLowerCase()
  const found = []
  for (const [motif, words] of Object.entries(MOTIFS)) {
    if (words.some((w) => t.includes(w))) found.push(motif)
  }
  return found
}

/**
 * Given a list of films, return an object mapping motif keys to counts
 * Uses extractMotifs to detect motifs on each film description
 *
 * @param {Array<{description: string}>} films
 */
export function motifCounts(films) {
  const counts = {}
  for (const f of films) {
    for (const m of extractMotifs(f.description)) {
      counts[m] = (counts[m] || 0) + 1
    }
  }
  return counts
}