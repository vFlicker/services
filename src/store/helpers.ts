import { Id, NodeData } from '~/types';
import { generateId } from '~/utils/generateId';

/**
 * Create a new node.
 */
const createNewNode = (): NodeData => ({
  id: generateId(),
  childrenNodes: [],
  editing: true,
  value: '',
});

/**
 * Recursive function for adding a node.
 */
export const addNode = (
  parentNodeId: Id,
  nodeArray: NodeData[],
): NodeData[] => {
  const updatedNodes: NodeData[] = [];

  for (const currentNode of nodeArray) {
    if (currentNode.id === parentNodeId) {
      updatedNodes.push({
        ...currentNode,
        childrenNodes: [...currentNode.childrenNodes, createNewNode()],
      });
    } else {
      updatedNodes.push({
        ...currentNode,
        childrenNodes: addNode(parentNodeId, currentNode.childrenNodes),
      });
    }
  }

  return updatedNodes;
};

/**
 * Recursive function for editing a node.
 */
export const editNode = (id: Id, nodeArray: NodeData[]): NodeData[] => {
  const updatedNodes: NodeData[] = [];

  for (const currentNode of nodeArray) {
    if (currentNode.id === id) {
      updatedNodes.push({ ...currentNode, editing: true });
    } else {
      updatedNodes.push({
        ...currentNode,
        childrenNodes: editNode(id, currentNode.childrenNodes),
      });
    }
  }

  return updatedNodes;
};

/**
 * Recursive function for editing a node.
 */
export const saveNode = (
  value: string,
  id: Id,
  nodeArray: NodeData[],
): NodeData[] => {
  const updatedNodes: NodeData[] = [];

  for (const currentNode of nodeArray) {
    if (currentNode.id === id) {
      updatedNodes.push({ ...currentNode, value: value, editing: false });
    } else {
      updatedNodes.push({
        ...currentNode,
        childrenNodes: saveNode(value, id, currentNode.childrenNodes),
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
