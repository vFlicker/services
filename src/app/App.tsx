import './styles/index.css';

import { useEffect, useState } from 'react';

import { Header } from '~/components/Header/Header';
import { Tree } from '~/components/Tree';
import {
  addNode,
  AppStoreProvider,
  calculateFontSize,
  decrementZoom,
  DEFAULT_ZOOM_VALUE,
  editNode,
  incrementZoom,
  removeNode,
  saveNode,
  TreeStoreProvider,
  ZOOM_VALUE,
} from '~/stores';
import { Id, NodeData } from '~/types';

const initialNodeData: NodeData[] = [
  {
    id: '1',
    value: 'Categories',
    editing: false,
    childrenNodes: [
      {
        id: '2',
        value: 'Category 1',
        editing: false,
        childrenNodes: [
          {
            id: '3',
            value: 'Sub category 1',
            editing: false,
            childrenNodes: [],
          },
          {
            id: '4',
            value: 'Sub category 2',
            editing: false,
            childrenNodes: [],
          },
        ],
      },
      {
        id: '5',
        value: 'Category 2',
        editing: false,
        childrenNodes: [],
      },
      {
        id: '6',
        value: 'Category 3',
        editing: false,
        childrenNodes: [],
      },
    ],
  },
];

export function App(): JSX.Element {
  const [zoom, setZoom] = useState<ZOOM_VALUE>(DEFAULT_ZOOM_VALUE);
  const [nodes, setNodes] = useState(initialNodeData);

  useEffect(() => {
    const htmlElement = document.querySelector('html');

    if (htmlElement) {
      const newFontSize = calculateFontSize(zoom);
      htmlElement.style.fontSize = `${newFontSize}px`;
    }
  }, [zoom]);

  const setZoomAction = (value: ZOOM_VALUE) => {
    setZoom(value);
  };

  const incrementZoomAction = () => {
    const newZoomValue = incrementZoom(zoom);
    setZoom(newZoomValue);
  };

  const decrementZoomAction = () => {
    const newZoomValue = decrementZoom(zoom);
    setZoom(newZoomValue);
  };

  const addNodeAction = (parentNodeId: Id) => {
    const updatedNodes = addNode(parentNodeId, nodes);
    setNodes(updatedNodes);
  };

  const editNodeAction = (id: Id) => {
    const updatedNodes = editNode(id, nodes);
    setNodes(updatedNodes);
  };

  const saveNodeAction = (value: string, id: Id) => {
    const updatedNodes = saveNode(value, id, nodes);
    setNodes(updatedNodes);
  };

  const removeNodeAction = (id: Id) => {
    const updatedNodes = removeNode(id, nodes);
    setNodes(updatedNodes);
  };

  return (
    <AppStoreProvider
      value={{ zoom, setZoomAction, decrementZoomAction, incrementZoomAction }}
    >
      <TreeStoreProvider
        value={{
          nodes,
          addNodeAction,
          editNodeAction,
          saveNodeAction,
          removeNodeAction,
        }}
      >
        <Header />
        <main>
          <Tree />
        </main>
      </TreeStoreProvider>
    </AppStoreProvider>
  );
}
