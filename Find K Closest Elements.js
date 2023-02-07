var findClosestElements = function(arr, k, x) {
    if(arr.length <= k) {
        return arr
    }

    let result = [];
    let l = 0;
    let r = k;
    let found = false;

    for(let i = 0; i < k; i++) {
        result.push(arr[i]);
    }

    while(found === false) {
        if(Math.abs(arr[r] - x) < Math.abs(x - arr[l])) {
            result.shift();
            result.push(arr[r])
            l++;
            r++;
        }
        else if (arr[r] === arr[l]) {
            l++;
            r++;
        }
        else {
            found = true;
        }
    }

    return result
};
