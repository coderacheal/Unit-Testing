const capitalizeString = string => {
  // string.trim()
  string = string.trim().toLowerCase().split('');
  for (let i = 0; i < string.length; i+= 1) {
    string[0] = string[0].toUpperCase() 
  }
  return string.join('');
}

// capitalizeString('hello aba jana');
module.exports = capitalizeString

