// O(n^2) time | O(n) space
function threeNumberSum(array, target) {
  array.sort((a,b) => a - b)
  array
  let resultSum = []
  
	for (let i=0; i < array.length; i++) {
		let left = i + 1
		let right = array.length - 1
		while(left < right) {
      let currentSum = array[i] + array[left] + array[right]
      if (currentSum === target) {
        resultSum.push([array[i], array[left], array[right]])
        left += 1
        right -= 1
      } else if (currentSum < target) {
        left +=1
      } else if (currentSum > target) {
        right -= 1
      }
    }
	}
  return resultSum
  
}
const array = [12, 3, 1, 2, -6, 5, -8, 6]
const result = threeNumberSum(array, 0) 
result