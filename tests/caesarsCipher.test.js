import caesarsCipher from '../javascript/caesarsCipher';

describe('caesarsCipher', () => {
  test('caseSensitivity', () => {
    expect(caesarsCipher('Catch Some Zzzzs', 1)).not.toBe('dbudi tpnf aaaat');
  });

  test('wrapping', () => {
    expect(caesarsCipher('Catch Some Zzzzs', 20)).toBe('Wunwb Migy Ttttm');
  });

  test('punctuation', () => {
    expect(caesarsCipher("Catch Some Zzzz's.", 20)).toBe("Wunwb Migy Tttt'm.");
  });

  test('basic functionality', () => {
    expect(caesarsCipher('Catch Some Zzzzs', 1)).not.toBe('dbudi tpnf aaaat');
  });
});
