import { getMessage } from '../src/libs/util'
test('expected message returned', () => {
  expect(getMessage()).toBe('hello')
})