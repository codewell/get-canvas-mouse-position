# @codewell/get-canvas-mouse-position
Get the position of a mouse on a canvas triggered by an event.

## Installation
```
npm install @codewell/get-canvas-mouse-position
```


## Basic usage
```JavaScript
import getCanvasMousePosition from '@codewell/get-canvas-mouse-position':


const handleClick = (event) => {
  const mousePosition = getCanvasMousePosition(event);
  const {x, y} = mousePosition; // The coordinate that was clicked on the canvas
}

return (
  <canvas onClick={handleClick} />
)

```
