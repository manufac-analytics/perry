export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    1;
    console.log('boop');
  }
  return a + b;
};
