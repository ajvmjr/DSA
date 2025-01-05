function binarySearch(arr, left, right, target) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;

  if (target < arr[mid]) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }

  return binarySearch(arr, left, right, target);
}