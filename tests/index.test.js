const getCanvasMousePosition = require('../src');

const testCanvas = {
  getBoundingClientRect: () => ({ x: 40, y: 40 }),
};

const testEvent = {
  clientX: 50,
  clientY: 60,
};

test('It calculates...', () => {
  expect(getCanvasMousePosition(testCanvas, testEvent))
    .toEqual({ x: 10, y: 20 });
});