var lengthOfLongestSubstring = function(s) {
    let currSet = new Set();
    //left pointer
    let l = 0;
    let max = 0;

    for(let i = 0; i < s.length; i++) {
        // case when the set has the current right pointer
        if(currSet.has(s[i])) {
            // delete every element from the beginning of the set up until the deletion of the current element and readd it to the end of the set.
            while(currSet.has(s[i])) {
                currSet.delete(s[l])
                l++;
            }
              
            currSet.add(s[i])
        }
        // if it's not in the set add it 
        else {
            currSet.add(s[i])
            if(currSet.size > max) {
                max = currSet.size
            }
        }
    }

    return max
};
