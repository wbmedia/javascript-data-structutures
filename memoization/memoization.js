
// Memoization Example
const memoization = (fn) => {
  let results = {}

  return (arg) => {
    if (!results[arg]) {
      console.log(`results ${arg} no saved`)
      results[arg] = fn(arg)
    } else {
      console.log(`results ${arg} saved`)
    }
    return results[arg]
  }
}

const memo = memoization( a => a * 2)

const request = memoization(async id => {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/" + id)
  let json = await res.json()
  return json
})

const result =request(1)
.then()
.catch()

result
result