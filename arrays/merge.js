function merge(a, b, m, n) {
  let i = j = k = 0;

  while (i <= m && j <= n) {
    if (a[i] <= b[j]) {
      c[k++] = a[i++];
    } else {
      c[k++] = b[j++]
    }
  }

  for (; i <= m; i++) {
    c[k++] = a[i];
  }

  for (; j <= n; j++) {
    c[k++] = b[j];
  }
}