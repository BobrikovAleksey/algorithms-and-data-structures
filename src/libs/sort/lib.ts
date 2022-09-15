export const compare = (a: number | string, b: number | string, desc: boolean): boolean => (
  (desc && a < b) || (!desc && a > b)
);

export default {
  compare,
};
