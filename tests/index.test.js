const getCanvasMousePosition = require('../src');

const testEvent = {
  clientX: 50,
  clientY: 60,
  target: {
    getBoundingClientRect: () => ({ x: 40, y: 40 }),
  },
};

test('It calculates...', () => {
  expect(getCanvasMousePosition(testEvent))
    .toEqual({ x: 10, y: 20 });
});