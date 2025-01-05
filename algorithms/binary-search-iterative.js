function binarySearch(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    const mid = Math.floor((i + j) / 2);

    if (arr[mid] === target) return mid;

    if (target < arr[mid]) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  return -1;
}