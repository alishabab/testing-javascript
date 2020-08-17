import reverseString from '../javascript/reverseString';

test('reverseString', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
  expect(reverseString()).toBe('Input valid string');
});