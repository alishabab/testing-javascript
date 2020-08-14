const stringMainupulation = (() => {

  const capitalize = (string = '') => {
    try {
      return string[0].toUpperCase() + string.slice(1);
    } catch (message) {
      return "Input valid string"
    }
  };

  const reverseString = (string) => {

  };

  return { capitalize, reverseString };

})();

export { stringMainupulation };

// stringMainupulation.capitalize();