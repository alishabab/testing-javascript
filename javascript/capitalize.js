const capitalize = (string = '') => {
  try {
    return string[0].toUpperCase() + string.slice(1);
  } catch (message) {
    return 'Input valid string';
  }
};

export default capitalize;