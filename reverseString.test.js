const reverseString = require('./reverseString');


test('Check to a reversed String ', () => {
  expect(reverseString('Hello')).toMatch('olleH')
})
