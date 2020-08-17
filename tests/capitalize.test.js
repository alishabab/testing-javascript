import capitalize from '../javascript/capitalize';

test('capitalize', () => {
  expect(capitalize('everyone enjoys food!')).toBe('Everyone enjoys food!');
  expect(capitalize()).toBe('Input valid string');
});