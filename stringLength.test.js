const stringLength = require('./stringLength');

// test('Check for length of string ', () => {
//   expect(stringLength('Hello')).toEqual(5)
// });

test('Length should be between 0 and 11 ', () => {
  expect(stringLength('hello')).toMatch('String length is ok')
})

