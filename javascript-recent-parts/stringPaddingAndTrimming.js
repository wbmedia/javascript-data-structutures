// left start padding
let str = "hello"
let amount = String(12.4)

str.padStart(5)
str.padStart(8)
str.padStart(8, "*")
str.padStart(5, "12345")
str.padStart(5, "ab")

str.padStart(1, "$")

str.padEnd(8, "abc")

amount.padStart(1, "$")
console.log(amount.padStart(5, "$"))

// trim strings

//old way

var trimMe = " Hello im am a no trimmed text \t \t"

console.log(trimMe.trim())
console.log(trimMe.trimStart())
console.log(trimMe.trimEnd())

console.log(trimMe.trimRight())
console.log(trimMe.trimLeft())
