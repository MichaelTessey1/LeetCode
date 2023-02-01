var minFlips = function(s) {
    let n = s.length
    s = s + s
    let alt1 = "", alt2 = ""

    for(let i = 0; i < s.length; i++) {
        if(i % 2 === 0) {
            alt1 += "0"
            alt2 += "1"
        }
        else {
            alt1 += "1"
            alt2 += "0"
        }
    }

    let res = s.length
    let diff1 = 0, diff2 = 0;
    let l = 0;

    for(let r = 0; r < s.length; r++) {
        if(s[r] !== alt1[r]) {
            diff1 += 1
        }
        if(s[r] !== alt2[r]) {
            diff2 += 1
        }

        if(r - l + 1 > n) {
            if(s[l] !== alt1[l]) {
                diff1 -= 1;
            }
            if(s[l] !== alt2[l]) {
                diff2 -= 1;
            }

            l++
        }

        if(r - l + 1 === n) {
            res = Math.min(res, diff1, diff2)
        }
    }

    return res
};
