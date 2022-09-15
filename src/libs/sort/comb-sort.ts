import { compare } from './lib';

export function combSort(numList: number[], desc = false): number[] | string[] {
  const result = numList.slice();
  let gap = result.length;
  let swapped = true;
  while (gap > 1 || swapped) {
    if (gap > 1) {
      gap = Math.floor(gap / 1.247);
    }
    swapped = false;
    let i = 0;
    let j = gap;
    while (j < result.length) {
      if (compare(result[i], result[j], desc)) {
        [result[i], result[j]] = [result[j], result[i]];
        swapped = true;
      }
      i += 1;
      j = i + gap;
    }
  }
  return result;
}

export default {
  combSort,
};
