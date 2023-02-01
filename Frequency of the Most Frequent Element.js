var maxFrequency = function(nums, k) {
    nums.sort(function(a,b) {return a-b});
    let l = 0, r = 0, res = 0, total = 0

    while(r < nums.length) {
        total += nums[r]

        while(nums[r] * (r-l+1) > total + k) {
            total -= nums[l]
            l++;
        }

        if(r-l+1 > res) {
            res = r-l+1
        }
        r++;
    }

    return res
};
