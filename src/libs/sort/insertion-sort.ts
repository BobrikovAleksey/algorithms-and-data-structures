import { compare } from './lib';

export function insertionSort(numList: number[], desc = false): number[] | string[] {
  const result = numList.slice();
  for (let i = 1; i < result.length; i += 1) {
    const tmp = result[i];
    let j = i;
    while (j > 0 && compare(tmp, result[j - 1], !desc)) {
      result[j] = result[j - 1];
      j -= 1;
    }
    result[j] = tmp;
  }
  return result;
}

export default {
  insertionSort,
};
