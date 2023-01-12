var rotate = function(nums, k) {
    //reduce redundancy incase k is longer than length of nums
    k = k % nums.length;


    //reversing the whole array
    let l = 0, r = nums.length-1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++;
        r--;
    }

    //reversing what use to be the last k elements back in order
    l = 0, r = k - 1

    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++;
        r--;
    }

    //reversing what use to be everything before the k elements back in order

    l = k, r = nums.length-1
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++;
        r--;
    }
};

//Most optimal solution with no extra space

/** What I came up with orginally
var rotate = function(nums, k) {

    for(let i = 0; i < k; i++) {
      //save last element
      let lastElement = nums[nums.length-1];
      //pop the last element
      nums.pop();
      //put the element back into the front
      nums.unshift(lastElement)
    }
    console.log(nums)
};

rotate([1,2,3,4,5,6,7], 3)

**/
