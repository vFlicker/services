import { DragEvent, useRef, useState } from 'react';

import classes from './DragContainer.module.css';

type DragContainerProps = {
  renderElement: (
    onDragStart: (evt: DragEvent<HTMLDivElement>) => void,
    onDrag: (evt: DragEvent<HTMLDivElement>) => void,
  ) => JSX.Element;
};

export function DragContainer({
  renderElement,
}: DragContainerProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  const [previousCoords, setPreviousCoords] = useState([0, 0]);

  const handleDragStart = (evt: DragEvent<HTMLDivElement>) => {
    // Disable the built-in drag visual effect
    evt.dataTransfer.setDragImage(new Image(), 0, 0);

    const container = containerRef.current;

    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const maxX = containerWidth - evt.currentTarget.clientWidth;
    const maxY = containerHeight - evt.currentTarget.clientHeight;

    let x = evt.clientX - evt.currentTarget.clientWidth / 2;
    let y = evt.clientY - evt.currentTarget.clientHeight / 2;

    x = Math.min(Math.max(0, x), maxX);
    y = Math.min(Math.max(0, y), maxY);

    setPreviousCoords([x, y]);
  };

  const handleDrag = (evt: DragEvent<HTMLDivElement>) => {
    const container = containerRef.current;

    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const currentX = evt.clientX - evt.currentTarget.clientWidth / 2;
    const currentY = evt.clientY - evt.currentTarget.clientHeight / 2;

    const maxX = containerWidth - evt.currentTarget.clientWidth;
    const maxY = containerHeight - evt.currentTarget.clientHeight;

    const [previousX, previousY] = previousCoords;

    let newLeft = Math.min(Math.max(0, currentX), maxX);
    let newTop = Math.min(Math.max(0, currentY), maxY);

    if (currentX < 0 || currentX > maxX) {
      newLeft = previousX;
    }

    if (currentY < 0 || currentY > maxY) {
      newTop = previousY;
    }

    evt.currentTarget.style.transform = `translate(${newLeft}px, ${newTop}px)`;

    setPreviousCoords([newLeft, newTop]);
  };

  return (
    <div className={classes.dragContainer} ref={containerRef}>
      {renderElement(handleDragStart, handleDrag)}
    </div>
  );
}
