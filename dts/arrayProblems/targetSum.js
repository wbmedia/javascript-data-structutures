function findTargetSum(nums, target) {
  let sumResult = 0;
  calculate(nums,0,0, target);
  return sumResult
  function calculate(nums,i, sum, target) {
    if (i === nums.length) {
      if ( sum === target ) {
        sumResult++
      }
    }else{
      calculate(nums, i + 1, sum + nums[i], target);
      calculate(nums, i + 1, sum - nums[i], target);
    }
  }
}




const array = [1, 1, 1, 1, 1]
const result = findTargetSum(array, 3);
result