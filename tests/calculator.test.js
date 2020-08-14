import calculator from '../javascript/calculator';

test('add', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(1, 2)).not.toBe(4);
  expect(calculator.add()).toBe(NaN);
});

test('subtract', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
  expect(calculator.subtract(1, 2)).not.toBe(4);
  expect(calculator.subtract()).toBe(NaN);
});

test('divide', () => {
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.divide(6, 2)).not.toBe(4);
  expect(calculator.divide()).toBe(NaN);
});

test('multiply', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.multiply(1, 2)).not.toBe(4);
  expect(calculator.multiply()).toBe(NaN);
});