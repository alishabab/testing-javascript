const stringMainupulation = (() => {
  const capitalize = (string = '') => {
    try {
      return string[0].toUpperCase() + string.slice(1);
    } catch (message) {
      return 'Input valid string';
    }
  };

  const reverseString = (string) => {
    try {
      return string.split('').reverse().join('');
    } catch (err) {
      return 'Input valid string';
    }
  };

  return { capitalize, reverseString };
})();

export default stringMainupulation;

// stringMainupulation.capitalize();