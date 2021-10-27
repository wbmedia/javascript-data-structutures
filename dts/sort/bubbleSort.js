var bubbleSort = function (array) {
  let swapped = false
  do {
    swapped =false
    for (let i = 0; i < array.length; i++) {
      if(array[i] > array[i + 1]) {
        const temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return array
};

const array = [1, 5, 4, 2, 3];
console.log(bubbleSort(array))