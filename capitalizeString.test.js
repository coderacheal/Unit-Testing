const capitalizeString = require('./capitalizeString')

test('Check capitalization ', () => {
  expect(capitalizeString('hello')).toMatch('Hello')
})
