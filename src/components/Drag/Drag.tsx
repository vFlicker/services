import { DragEvent, useRef, useState } from 'react';

import classes from './Drag.module.css';

export function Drag(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);

  const [previousCoords, setPreviousCoords] = useState([0, 0]);

  const handleDragStart = (evt: DragEvent<HTMLDivElement>) => {
    const square = squareRef.current;
    const container = containerRef.current;

    if (!square || !container) return;

    const containerRect = container.getBoundingClientRect();
    const squareWidth = square.clientWidth;
    const squareHeight = square.clientHeight;

    const maxX = containerRect.width - squareWidth;
    const maxY = containerRect.height - squareHeight;

    let x = evt.clientX - squareWidth / 2;
    let y = evt.clientY - squareHeight / 2;

    x = Math.min(Math.max(0, x), maxX);
    y = Math.min(Math.max(0, y), maxY);

    setPreviousCoords([x, y]);
  };

  const handleDrag = (evt: DragEvent<HTMLDivElement>) => {
    const square = squareRef.current;
    const container = containerRef.current;

    if (!square || !container) return;

    const containerRect = container.getBoundingClientRect();
    const squareWidth = square.clientWidth;
    const squareHeight = square.clientHeight;

    const [previousX, previousY] = previousCoords;

    const currentX = evt.clientX - squareWidth / 2;
    const currentY = evt.clientY - squareHeight / 2;

    const maxX = containerRect.width - squareWidth;
    const maxY = containerRect.height - squareHeight;

    let newLeft = Math.min(Math.max(0, currentX), maxX);
    let newTop = Math.min(Math.max(0, currentY), maxY);

    if (currentX < 0 || currentX > maxX) {
      newLeft = previousX;
    }

    if (currentY < 0 || currentY > maxY) {
      newTop = previousY;
    }

    square.style.top = `${newTop}px`;
    square.style.left = `${newLeft}px`;

    setPreviousCoords([newLeft, newTop]);
  };

  return (
    <div
      className={classes.container}
      ref={containerRef}
      onDragOver={(e) => e.preventDefault()}
    >
      <div
        ref={squareRef}
        className={classes.square}
        draggable
        onDragStart={handleDragStart}
        onDrag={handleDrag}
      ></div>
    </div>
  );
}
