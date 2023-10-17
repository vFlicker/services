import { useState } from 'react';

import { initialNodeData } from '~/data';
import { addNode, editNode, removeNode, saveNode } from '~/stores';
import { Id } from '~/types';

export const useNode = () => {
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

  return {
    nodes,
    addNodeAction,
    editNodeAction,
    saveNodeAction,
    removeNodeAction,
  };
};
