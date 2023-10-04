import { Id, NodeData } from '~/types';
import { generateId } from '~/utils/generateId';

const createNode = (value: string): NodeData => ({
  id: generateId(),
  childrenNodes: [],
  value: value,
});

/**
 * Recursive function for adding a node.
 */
export const addNode = (
  value: string,
  parentNodeId: Id,
  nodeArray: NodeData[],
): NodeData[] => {
  const updatedNodes: NodeData[] = [];

  for (const currentNode of nodeArray) {
    if (currentNode.id === parentNodeId) {
      updatedNodes.push({
        ...currentNode,
        childrenNodes: [...currentNode.childrenNodes, createNode(value)],
      });
    } else {
      updatedNodes.push({
        ...currentNode,
        childrenNodes: addNode(value, parentNodeId, currentNode.childrenNodes),
      });
    }
  }

  return updatedNodes;
};

/**
 * Recursive function for editing a node.
 */
export const editNode = (
  value: string,
  id: Id,
  nodeArray: NodeData[],
): NodeData[] => {
  const updatedNodes: NodeData[] = [];

  for (const currentNode of nodeArray) {
    if (currentNode.id === id) {
      updatedNodes.push({ ...currentNode, value: value });
    } else {
      updatedNodes.push({
        ...currentNode,
        childrenNodes: editNode(value, id, currentNode.childrenNodes),
      });
    }
  }

  return updatedNodes;
};

/**
 * Recursive function for deleting a node.
 */
export const removeNode = (id: Id, nodeArray: NodeData[]): NodeData[] => {
  const updatedNodes: NodeData[] = [];

  for (const currentNode of nodeArray) {
    if (currentNode.id === id) {
      continue;
    }

    updatedNodes.push({
      ...currentNode,
      childrenNodes: removeNode(id, currentNode.childrenNodes),
    });
  }

  return updatedNodes;
};
