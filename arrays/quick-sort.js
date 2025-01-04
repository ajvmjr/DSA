function quickSort(arr, start, end) {
  if (end <= start) return;

  const pivotIndex = partition(arr, start, end);

  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
}

function partition (arr, start, end) {
  console.log({start, end})
  const pivot = arr[end];

  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      i++;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  
  i++;
  const temp = arr[i];
  arr[i] = pivot;
  arr[end] = temp;

  return i;
}

const nums = [8, 2, 4, 7, 1, 3, 9, 6, 5];

const start = performance.now();

quickSort(nums, 0, nums.length - 1);

const end = performance.now();
