import './styles/index.css';

import { useState } from 'react';

import { Header } from '~/components/Header/Header';
import { Tree } from '~/components/Tree';
import {
  addNode,
  editNode,
  removeNode,
  saveNode,
  StoreProvider,
} from '~/store';
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
  const [nodes, setNodes] = useState(initialNodeData);

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
    <StoreProvider
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
    </StoreProvider>
  );
}
