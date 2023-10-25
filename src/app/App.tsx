import './styles/index.css';

import { DragContainer } from '~/components/DragContainer';
import { Header } from '~/components/Header';
import { Tree } from '~/components/Tree';
import { TreeProvider, ZoomProvider } from '~/contexts';

import classes from './App.module.css';

export function App(): JSX.Element {
  return (
    <ZoomProvider>
      <TreeProvider>
        <Header />
        <main className={classes.main}>
          <DragContainer
            renderElement={(onDragStart, onDrag) => (
              <Tree onDrag={onDrag} onDragStart={onDragStart} />
            )}
          />
        </main>
      </TreeProvider>
    </ZoomProvider>
  );
}
