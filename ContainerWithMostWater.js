var maxArea = function(height) {
    let l = 0; 
    let r = height.length - 1
    let total = 0;

    while(l < r) {
        //if left side the smaller, check to see if the amount of water is greater than current total and replace if so. Then move the left pointer over.
        if(height[l] < height[r]) {
            if(total < height[l] * (r-l)) {
                total = height[l] * (r-l)
            }
            l++;
        }
        //same as left but with the right side
        else if(height[r] < height[l]) {
            if(total < height[r] * (r-l)) {
                total = height[r] * (r-l)
            }
            r--;
        }
        //if theyre both the same height, just move the left pointer
        else {
            if(total < height[r] * (r-l)) {
                total = height[r] * (r-l)
            }
            l++;
        }

    }

    return total
};
