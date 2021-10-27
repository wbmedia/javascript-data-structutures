function crossAdd(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    var goingUp = input[i];
    var goingDown = input[input.length - 1 - i];
    answer.push(goingUp + goingDown);
  }
  return answer;
}
input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = crossAdd(input);
console.log(result);

// Find Element in Order Array
function find(needle, haystack) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle) {
      return true;
    }
  }
}
const res = find(1, input);
console.log(res);

// Find Element in Disordered Array

function findElement(haystack, needle) {
  haystack.sort((a,b) => a - b)
  console.log(haystack)
  let left = 0;
  let right = haystack.length - 1;
  while(left <= right) {
    let middle = Math.floor((left + right) / 2);
    if(haystack[middle] === needle) {
      return middle
    } else if (haystack[middle] < needle) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return - 1
}
const disordered = [33, 80, 15, 21, 77, 4, 67, 1, 5, 10];
const r = findElement(disordered,33);
console.log(r);

// n(^2)
function makeTuples(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]]);
    }
  }
  return answer;
}

const re = makeTuples(input);
console.log(re);