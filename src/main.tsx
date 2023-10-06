import { createRoot } from 'react-dom/client';

import { DragContainer, DraggableItem } from './components/DragContainer';

// import { App } from './app';

const rootElement = document.getElementById('app') as HTMLElement;
createRoot(rootElement).render(
  <DragContainer
    renderElement={(onDragStart, onDrag) => (
      <DraggableItem onDragStart={onDragStart} onDrag={onDrag} />
    )}
  />,
);
