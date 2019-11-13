/**
 * Get the coordinates of the mouse on the canvas
 * @param {Object} event - Mouse canvas event
 * @param {Object} canvas - HTML canvas
 * @returns {Object} - Returns mouse position {x, y}
 */
const getCanvasMousePosition = (canvas, event) => {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.x,
    y: event.clientY - rect.y,
  };
};

module.exports = getCanvasMousePosition;
