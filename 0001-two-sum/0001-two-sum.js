/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let indexes = []
    nums.forEach((num, idx)=>{
      const idx2 = nums.findIndex((x, i) => (num + x == target && idx != i))
      if(idx2 >= 0){
        indexes= [idx, idx2]
      }

    })
    return indexes
};