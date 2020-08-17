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

export default caesarsCipher;