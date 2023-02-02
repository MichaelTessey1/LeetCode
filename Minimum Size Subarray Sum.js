var minSubArrayLen = function(target, nums) {
  let l = 0, total = 0;
  let res = nums.length + 1;

  for(let r = 0; r < nums.length; r++) {
    total += nums[r];

    while(total >= target) {
        res = Math.min(res, r - l + 1)
        total -= nums[l]
        l += 1;
    }
  }

  if(res === nums.length + 1) {
      return 0
  }
  else {
      return res
  }
};
