import './styles/index.css';

import { DragContainer } from '~/components/DragContainer';
import { Header } from '~/components/Header';
import { Tree } from '~/components/Tree';
import { useNode } from '~/hooks/useNode';
import { useZoom } from '~/hooks/useZoom';
import { TreeStoreProvider, ZoomStoreProvider } from '~/stores';

import classes from './App.module.css';

export function App(): JSX.Element {
  const zoomValues = useZoom();
  const nodeValues = useNode();

  return (
    <ZoomStoreProvider value={zoomValues}>
      <TreeStoreProvider value={nodeValues}>
        <Header />
        <main className={classes.main}>
          <DragContainer
            renderElement={(onDragStart, onDrag) => (
              <Tree onDrag={onDrag} onDragStart={onDragStart} />
            )}
          />
        </main>
      </TreeStoreProvider>
    </ZoomStoreProvider>
  );
}
