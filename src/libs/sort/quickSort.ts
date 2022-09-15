export function quickSort(numList: number[], desc = false): number[] | string[] {
  const result = numList.slice();

  function partition(left: number, right: number): number {
    const x = result[right];
    let lesser = left;
    for (let i = left; i < right; i += 1) {
      if ((desc && result[i] >= x) || (!desc && result[i] <= x)) {
        if (result[i] !== x) {
          [result[i], result[lesser]] = [result[lesser], result[i]];
        }
        lesser += 1;
      }
    }
    [result[lesser], result[right]] = [result[right], result[lesser]];
    return lesser;
  }

  function implementQuickSort(left: number, right: number): void {
    if (left < right) {
      const q = partition(left, right);
      implementQuickSort(left, q - 1);
      implementQuickSort(q + 1, right);
    }
  }

  if (result.length) {
    implementQuickSort(0, result.length - 1);
  }
  return result;
}

export default {
  quickSort,
};
