const Calculator = require('./calculator')

// Calculator.add

describe('Testing add method', () => {
    test('add 2 + 3 ', () => {
      expect(Calculator.add(2, 3)).toBe(5)
    })   
    test('add -2 + 3 ', () => {
      expect(Calculator.add(-2, 3)).toEqual(1)
    })   
    test('add 2 + 0', () => {
      expect(Calculator.add(2, 0)).toEqual(2)
    })   
})

describe('Testing subtract method', () => {
    test('subtract 2 - 3 ', () => {
      expect(Calculator.subtract(2, 3)).toBe(-1)
    })   
    test('subtract 12 - 3 ', () => {
      expect(Calculator.subtract(12, 3)).toEqual(9)
    })   
    test('subtract -2 - 2', () => {
      expect(Calculator.subtract(-2, -2)).toEqual(0)
    })   
})
describe('Testing divide method', () => {
    test('divide 12 / 3 ', () => {
      expect(Calculator.divide(12, 3)).toBe(4)
    })   
    test('divide -12 / 3 ', () => {
      expect(Calculator.divide(-12, 3)).toEqual(-4)
    })   
    test('divide -12 / 0', () => {
      expect(Calculator.divide(12, 0)).toEqual(0)
    })   
})
describe('Testing multiply method', () => {
    test('multiply 2 * 3 ', () => {
      expect(Calculator.multiply(2, 3)).toBe(6)
    })   
    test('multiply -12 * 3 ', () => {
      expect(Calculator.multiply(-12, 3)).toEqual(-36)
    })   
    test('multiply -12 * -2', () => {
      expect(Calculator.multiply(-12, -2)).toEqual(24)
    })   
})