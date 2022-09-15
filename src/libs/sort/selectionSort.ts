import { compare } from './lib';

export function selectionSort(numList: number[], desc = false): number[] | string[] {
  const result = numList.slice();
  for (let i = 0; i < result.length; i += 1) {
    let k = i;
    for (let j = k + 1; j < result.length; j += 1) {
      if (compare(result[k], result[j], desc)) {
        k = j;
      }
    }
    if (k !== i) {
      [result[i], result[k]] = [result[k], result[i]];
    }
  }
  return result;
}

export default {
  selectionSort,
};
