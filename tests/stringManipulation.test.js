import stringMainupulation from '../javascript/stringMainupulation';

test('capitalize', () => {
  expect(stringMainupulation.capitalize('everyone enjoys food!')).toBe('Everyone enjoys food!');
  expect(stringMainupulation.capitalize()).toBe('Input valid string');
});

test('reverseString', () => {
  expect(stringMainupulation.reverseString('hello world')).toBe('dlrow olleh');
  expect(stringMainupulation.reverseString()).toBe('Input valid string');
});

describe('caesarsCipher', () => {
  test('caseSensitivity', () => {
    expect(stringMainupulation.caesarsCipher('Catch Some Zzzzs', 1)).not.toBe('dbudi tpnf aaaat');
  });

  test('wrapping', () => {
    expect(stringMainupulation.caesarsCipher('Catch Some Zzzzs', 20)).toBe('Wunwb Migy Ttttm');
  });

  test('punctuation', () => {
    expect(stringMainupulation.caesarsCipher("Catch Some Zzzz's.", 20)).toBe("Wunwb Migy Tttt'm.");
  });

  test('basic functionality', () => {
    expect(stringMainupulation.caesarsCipher('Catch Some Zzzzs', 1)).not.toBe('dbudi tpnf aaaat');
  });
});
