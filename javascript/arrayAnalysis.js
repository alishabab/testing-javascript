const anaylze = (arr) => ({
  average: arr.reduce((a, b) => a + b, 0) / arr.length,
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
});

export default anaylze;