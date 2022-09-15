import { compare } from './lib';

export function bubbleSort(numList: number[], desc = false): number[] | string[] {
  const result = numList.slice();
  for (let i = 0; i < numList.length - 1; i += 1) {
    let counter = 0;
    for (let j = 0; j < numList.length - i - 1; j += 1) {
      if (compare(result[j], result[j + 1], desc)) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        counter += 1;
      }
    }
    if (!counter) break;
  }
  return result;
}

export default {
  bubbleSort,
};
