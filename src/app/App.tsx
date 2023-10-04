import './styles/index.css';

import { useState } from 'react';

import { Tree } from '~/components/Tree';
import { addNode, editNode, removeNode, StoreProvider } from '~/store';
import { Id, NodeData } from '~/types';

const initialNodeData: NodeData[] = [
  {
    id: '1',
    value: 'Categories',
    childrenNodes: [
      {
        id: '2',
        value: 'Category 1',
        childrenNodes: [
          {
            id: '3',
            value: 'Sub category 1',
            childrenNodes: [],
          },
          {
            id: '4',
            value: 'Sub category 2',
            childrenNodes: [],
          },
        ],
      },
      {
        id: '5',
        value: 'Category 2',
        childrenNodes: [],
      },
      {
        id: '6',
        value: 'Category 3',
        childrenNodes: [],
      },
    ],
  },
];

export function App(): JSX.Element {
  const [nodes, setNodes] = useState(initialNodeData);

  const addNodeAction = (value: string, parentNodeId: Id) => {
    const updatedNodes = addNode(value, parentNodeId, nodes);
    setNodes(updatedNodes);
  };

  const editNodeAction = (value: string, id: Id) => {
    const updatedNodes = editNode(value, id, nodes);
    setNodes(updatedNodes);
  };

  const removeNodeAction = (id: Id) => {
    const updatedNodes = removeNode(id, nodes);
    setNodes(updatedNodes);
  };

  return (
    <StoreProvider
      value={{ nodes, addNodeAction, editNodeAction, removeNodeAction }}
    >
      <Tree />
    </StoreProvider>
  );
}
