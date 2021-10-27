

var tmp = getSomeRecords()

// Imperative Destructuring old way 😔 ❌ 

var first = tmp[0]
var second = tmp[1]

var firstName = first.name
var firstEmail = first.email != undefined ? first.email : "nobody@none.tld"

var secondName = second.name
var secondEmail = second.email != undefined ? second.email : "nobody@none.tld"

// Not good idea this code not working ❌ 
var [
  {name: firstName, email: firstEmail}, 
  {name: secondName, email: secondEmail}
]


function getSomeRecords(firstName, firstEmail) {
  console.log(firstName, firstEmail)
}

// Declarative destructuring 😃 ✅  better approach refactor to Imperative to Declarative

function data() {
  return [1,2,3,4,5,6,7,8,9,10]
}

// create a temporary to hold values
var temp = data()

// values from array
var first = temp[0]
var second = temp[1]
var third = temp[2]
var four = temp.slice(3)

// Destructuring way ✅  more readable 🚀 

// left hand side
var [first, second, third] =  data()

// Spread Operator
var [first, second, third, ...four] = temp = data()

console.log(temp)


