//move 0's and 1's at one side
let arr1 = [1, 2, 0, 4, 3, 0, 5, 0];
//arr=[0,0,0,1,2,4,3,5];

var moveZeroes = function (nums) {
  let count = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 0) {
      nums[count--] = nums[i];
    }
  }

  for (let i = count; i >= 0; i--) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeroes(arr1));
