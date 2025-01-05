function mergeSort(arr) {
  const n = arr.length;
  
  if (n < 2) return;

  const mid = Math.floor(n / 2);

  const left = [];
  const right = [];

  for (let i = 0; i < mid; i++) {
    left[i] = arr[i];
  }

  for (let i = mid; i < n; i++) {
    right[i - mid] = arr[i];
  }

  mergeSort(left);
  mergeSort(right);

  merge(left, right, arr);
}

function merge(leftList, rightList, originalList) {
  let i = j = k = 0;

  const m = leftList.length;
  const n = rightList.length;

  while (i < m && j < n) {
    if (leftList[i] < rightList[j]) {
      originalList[k++] = leftList[i++];
    } else {
      originalList[k++] = rightList[j++];
    }
  }

  for (; i < m; i++) {
    originalList[k++] = leftList[i];
  }

  for (; j < n; j++) {
    originalList[k++] = rightList[j];
  }
}

const nums = [8, 2, 4, 7, 1, 3, 9, 6, 5];
mergeSort(nums);