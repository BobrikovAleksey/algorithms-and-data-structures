import { compare } from './lib';

export function shakerSort(numList: number[], desc = false): number[] | string[] {
  const result = numList.slice();
  let left = 0;
  let right = numList.length - 1;
  while (left < right) {
    for (let i = left; i < right; i += 1) {
      if (compare(result[i], result[i + 1], desc)) {
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
      }
    }
    right -= 1;
    for (let i = right; left < i; i -= 1) {
      if (compare(result[i], result[i - 1], !desc)) {
        [result[i], result[i - 1]] = [result[i - 1], result[i]];
      }
    }
    left += 1;
  }
  return result;
}

export default {
  shakerSort,
};
