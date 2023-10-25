import { createContext, PropsWithChildren, useState } from 'react';

import { initialNodeData } from '~/data';
import { Id, NodeData } from '~/types';

import { addNode, editNode, removeNode, saveNode } from './helpers';

type InitialState = {
  nodes: NodeData[];

  addNodeAction(parentNodeId: Id): void;
  editNodeAction(id: Id): void;
  saveNodeAction(value: string, id: Id): void;
  removeNodeAction(id: Id): void;
};

type TreeProviderProps = PropsWithChildren;

export const TreeContext = createContext<InitialState>({
  nodes: [],

  addNodeAction: () => undefined,
  editNodeAction: () => undefined,
  saveNodeAction: () => undefined,
  removeNodeAction: () => undefined,
});

export function TreeProvider({ children }: TreeProviderProps): JSX.Element {
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
    <TreeContext.Provider
      value={{
        nodes,
        addNodeAction,
        editNodeAction,
        saveNodeAction,
        removeNodeAction,
      }}
    >
      {children}
    </TreeContext.Provider>
  );
}
