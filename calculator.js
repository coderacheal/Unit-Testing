class Calculator {

  static add = (x, y) => {
    return x + y
  }
  static subtract = (x, y) => {
    return x - y
  }

  static divide = (x, y) => {
    if (y === 0) {
      return 0
    } else {
      return x / y
    }
  }
  static multiply = (x, y) => {
    return x * y
  }
}

module.exports = Calculator