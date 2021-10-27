// Old way to destructuring ❌
function data(tmp = {}) {
  var { a, b } = tmp;
}

// Better approach to destructuring 👌 ✅
function myData({ a, b } = {}, x) {}
myData({ a: 1, b: 2 }, 42);

function orderArray(array) {
  return array.sort(helperOrder)
}

function helperOrder(a,b) {
  return a - b
}


orderArray([4,5,7,1,20,100,70])
console.log(orderArray([4,5,7,1,20,100,70]))