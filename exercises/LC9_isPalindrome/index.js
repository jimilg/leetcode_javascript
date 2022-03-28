// Determine whether an integer is a palindrome. An integer is
// a palindrome when it reads the same backward as forward.
// Solve this WITHOUT converting the integer to a string.
// -------------------------------------------------------------
// function isPalindrome(121) --> true
// function isPalindrome(-121) --> false
// function isPalindrome(10) --> false

function isPalindrome(s) {
    /* Sanitize input string to only look
    for alphanumeric characters
    */
    s.toLowerCase().replace(/[\W_]/g, "");
  
    /*
    Create a left and right pointer
    */
    let left = 0;
    let right = s.length - 1;
  
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    console.log("true");
  }
  

module.exports = isPalindrome;
