
const arr = [10,5,3,8,2,6,4,7,9,1]
// approach: insertion sort 1
var insertionSort = function(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

const result = insertionSort(arr);
console.log(result);

// approach: insertion sort 1
var insertionSort2 = function(arr) {
  for(let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]
    let j 
    for(j = i - 1;arr[j] > numberToInsert && j >=0; j++) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = numberToInsert
  }
  return arr
}
const res = insertionSort2(arr)
console.log(res)