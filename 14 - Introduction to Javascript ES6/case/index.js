var user = prompt('enter your name')
var sliceFirstWord = user.slice(0,1)
var sliceOtherWords = user.slice(1)
var toUpper = sliceFirstWord.toUpperCase()
console.log(toUpper + sliceOtherWords)