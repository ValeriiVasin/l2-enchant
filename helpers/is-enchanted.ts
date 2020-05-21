export const isEnchanted = (rate: number): boolean => {
  return Math.floor(Math.random() * 100) < rate;
};
