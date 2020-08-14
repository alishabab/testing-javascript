import { stringMainupulation } from '../javascript/stringMainupulation';

test('Returns capitalized string', () => {
  expect(stringMainupulation.capitalize('everyone enjoys food!')).toBe('Everyone enjoys food!');
});

test('Returns error if string empty', () => {
  expect(stringMainupulation.capitalize()).toBe('Input valid string');
});