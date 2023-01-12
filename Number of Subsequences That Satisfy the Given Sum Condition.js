var numSubseq = function(nums, target) {
    nums.sort((a,b) => {return a-b})
    let m = BigInt((10 ** 9) + 7)
    let r = nums.length-1
    let output = BigInt(0)
    
    for(let i = 0; i < nums.length; i++) {
        while(nums[i] + nums[r] > target && i <= r) r--;
        if(i <= r) {
            output = (output + (BigInt(2) ** BigInt(r-i))) % m
        }
    }

    return output % m
};

numSubseq([3,5,6,7], 9)

//BigInt helps with the modulo and large answers, I've tried without BigInt but the answer would be 1 off for some reason
