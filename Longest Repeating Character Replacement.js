var characterReplacement = function(s, k) {
    let letterCount = new Map();

    let l = 0; 

    // checks the current window
    let result = 0;
    // keeps track of the value of the most recurring letter;
    let mostRecc = 0;
    // records the max of current window
    let max = 0;

    for(let i = 0; i < s.length; i++) {
        // adds new letter to hashmap or updates the count
        if(letterCount.has(s[i]) === false || letterCount.has(s[i]) === 0) {
            letterCount.set(s[i], 1)
        }
        else {
            letterCount.set(s[i], letterCount.get(s[i])+1)
        }

        result = i - l + 1;
        
// if the current letter currently have more value than the most recurring value of whatever key, then update it.
        if (letterCount.get(s[i]) > mostRecc) {
            mostRecc = letterCount.get(s[i])
        }
// if the result - the most recurring letter is greater than the given K, move the left pointer;
        if(result - mostRecc > k) {
// if the left pointer is going to go up 1, then the value of the L pointer decreases by 1
            letterCount.set(s[l], letterCount.get(s[l])-1)
            l++
// update the result once the left pointer is move.
            result--
        }
        if (result > max) {
            max = result;
        }

    }

    return max;
