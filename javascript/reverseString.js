const reverseString = (string) => {
  try {
    return string.split('').reverse().join('');
  } catch (err) {
    return 'Input valid string';
  }
};

export default reverseString;