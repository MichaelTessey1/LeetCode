var fourSum = function(nums, target) {
    nums.sort((a,b) => (a-b))
    let output = [];
    let len = nums.length
    let l = 0;
    let r = 0;
    let sum = 0;

    for(let i = 0; i < len - 3; i++) {
        //if the current index is the same as before, skip
        if(i > 0 && nums[i] === nums[i-1]) continue;
        //when the next 4 is greater than the target after being sorted, then we don't need to find anymore
        if(nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) break;
        //when the first index and last three are less than the targer, move onto the next iteration
        if(nums[i] + nums[len-1] + nums[len-2] + nums[len-3] < target) continue;

        //nested loop to check for all pairs before checking left and right.
        for(let j = i + 1; j < len - 2; j++) {
            //skip if its the same value as before
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            // when the 2 indices and the next 2 are greater than the targer, we don't need to go any further
            if(nums[i] + nums[j] + nums[j+1] + nums[j+2] > target) break;
            //when the 2 indices and the last 2 are less than the target, there's no other answer but to go to the next j index.
            if(nums[i] + nums[j] + nums[len-1] + nums[len-2] < target) continue

            // start checking left of the second index and the last index and close in from there
            l = j + 1;
            r = len - 1;

            while (l < r) {
                //add up all the indices with the pointers.
                sum = nums[i] + nums[j] + nums[l] + nums[r]

                if(sum < target) {
                    //move the left pointer when less than target
                    l++;
                }
                else if (sum > target) {
                    //move the right pointer when less than target
                    r--;
                }
                else {
                    //otherwise that must mean the sum is equal to the target so push to output
                    output.push([nums[i], nums[j], nums[l], nums[r]]);
                    //if the left is the same as before, just go to the next left
                    while(l < r && nums[l] === nums[l+1]) l++;
                    //if the right is the same as before, just move to the next right
                    while(l < r && nums[r] === nums[r-1]) r--;
                    //move left and right pointer after pushing
                    l++;
                    r--;
                }
            }
        }
        
    }

    return output

};

//answer from https://baffinlee.com/leetcode-javascript/problem/4sum.html
//broke down each component to understand concept
