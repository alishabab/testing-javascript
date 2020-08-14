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

  const caesarsCipher = (str, amount) => {
    if (amount < 0) {
      return caesarsCipher(str, amount + 26);
    }
    let output = '';

    for (let i = 0; i < str.length; i += 1) {
      let c = str[i];
      if (c.match(/[a-z]/i)) {
        const code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }
      output += c;
    }
    return output;
  };

  return { capitalize, reverseString, caesarsCipher };
})();

export default stringMainupulation;