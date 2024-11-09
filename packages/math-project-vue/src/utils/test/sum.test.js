import { expect, test } from 'vitest'
import { sum } from '../test/sum.js'

test('add 1 + 2 to equals 3', () => {
  expect(sum(1, 2)).toBe(3)
})
