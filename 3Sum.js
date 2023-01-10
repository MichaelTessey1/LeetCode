var threeSum = function(nums) {
    const output = [];
    nums.sort((a,b) => a - b);

    for(let i = 0; i < nums.length; i++) {

        if(i > 0 && nums[i] === nums[i-1]) continue;

        let l = i + 1;
        let r = nums.length - 1;

        while (r > l) {

            if(nums[l] + nums[r] > 0 - nums[i]) {
                r--;
            }
            else if (nums[l] + nums[r] < 0 - nums[i]) {
                l++;
            }
            else {
                output.push([nums[i], nums[l], nums[r]]);
                while(nums[l] === nums[l+1]) l++;
                l++;
            }
        }
        
    }

    return output
};
