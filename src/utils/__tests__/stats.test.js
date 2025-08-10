import { describe, test, expect } from 'vitest'
import { avgRuntimeByDirector } from '../stats'

describe('avgRuntimeByDirector', () => {
  test('averages per director correctly', () => {
    const films = [
      { director: 'A', running_time: '100' },
      { director: 'A', running_time: '80' },
      { director: 'B', running_time: '120' },
      { director: 'B', running_time: '0' }, // ignored because 0 treated as falsy for count
    ]
    const result = avgRuntimeByDirector(films)
    expect(result.A).toBe(90)
    expect(result.B).toBe(120)
  })
})
