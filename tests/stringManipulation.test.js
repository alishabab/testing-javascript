import stringMainupulation from '../javascript/stringMainupulation';

test('capitalize', () => {
  expect(stringMainupulation.capitalize('everyone enjoys food!')).toBe('Everyone enjoys food!');
  expect(stringMainupulation.capitalize()).toBe('Input valid string');
});

test('reverseString', () => {
  expect(stringMainupulation.reverseString('hello world')).toBe('dlrow olleh');
  expect(stringMainupulation.reverseString()).toBe('Input valid string');
});