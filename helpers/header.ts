export const header = (text: string) => {
  const length = 60;
  const header = ` ${text} `;
  const headerLength = header.length;
  const left = Math.floor((length - headerLength) / 2);
  const right = length - (left + headerLength);

  return `-`.repeat(left) + header + '-'.repeat(right);
};
