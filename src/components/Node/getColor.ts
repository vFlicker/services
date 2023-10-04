const colors = [
  'var(--white)',
  'var(--orange)',
  'var(--turquoise)',
  'var(--gray)',
];

export const getColor = (depth: number) => {
  if (depth === 0) {
    return colors[0];
  }

  const index = ((depth - 1) % (colors.length - 1)) + 1;
  return colors[index];
};
