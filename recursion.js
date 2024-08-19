/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1; // Base case: product of an empty array is 1
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0; // Base case: no words, length is 0
  const currentLength = words[0].length;
  const maxLengthOfRest = longest(words.slice(1));
  return Math.max(currentLength, maxLengthOfRest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return ""; // Base case: empty string
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true; // Base case: single character or empty string
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx >= arr.length) return -1; // Base case: reached end of array
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return ""; // Base case: empty string
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) return -1; // Base case: value not found
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === val) return mid;
  if (arr[mid] > val) return binarySearch(arr, val, start, mid - 1);
  return binarySearch(arr, val, mid + 1, end);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
