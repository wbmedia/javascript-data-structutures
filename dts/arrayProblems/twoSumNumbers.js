function twoNumberSum(numbers, target) {
  numbers.sort((a, b) => a - b)
  let left = 0, right = numbers.length -1;
  while(left < right) {
    let currentSum = numbers[left] + numbers[right];
    if(currentSum === target) {
      return [numbers[left], numbers[right]]
    }else if (currentSum < target) {
      left += 1;
    }else {
      right -= 1;
    }
  }
  return `cant find sum of ${target}`
}

const numbers = [3, 5, -4, 8, 11, 1, -1, 6];

let result = twoNumberSum(numbers, 11);
result
