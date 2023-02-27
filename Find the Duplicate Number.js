/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const num = new Set();

    for(let i = 0; i < nums.length; i++) {
        if(!num.has(nums[i])) {
            num.add(nums[i])
        }
        else {
            return nums[i]
        }
    }
};
