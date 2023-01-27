/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if(s1.length> s2.length) return false;

  let letters = "abcdefghijklmnopqrstuvwxys"
  let letterIndex = 0;
  let letterCount = Array(26)
  letterCount.fill(0);

  for(let i = 0; i < s1.length; i++) {
    letterIndex = letters.indexOf(s1[i])
    letterCount[letterIndex]++;

    letterIndex = letters.indexOf(s2[i])
    letterCount[letterIndex]--;
  }
  if(zeros(letterCount) === true) return true;
  
  let l = 0;

  for(let i = s1.length; i < s2.length; i++) {
    letterIndex = letters.indexOf(s2[l])
    letterCount[letterIndex]++
    l++;
    letterIndex = letters.indexOf(s2[i])
    letterCount[letterIndex]--
    if(zeros(letterCount) === true) return true;
  }

  return false;
  
  function zeros(letterCount) {
    for(let i = 0; i < letterCount.length; i++) {
      if(letterCount[i] !== 0) {
        return false
      }
    }

    return true;
  }
  
};
