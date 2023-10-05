import { useContext } from 'react';

import { NodeData } from '~/types';

import { StoreContext } from '../../store';
import { Node } from '../Node';

export function Tree(): JSX.Element {
  const { nodes } = useContext(StoreContext);

  const renderNodes = (trees: NodeData[], depth: number) => {
    return trees.map((tree) => {
      const { id, editing, value } = tree;

      if (!tree.childrenNodes.length) {
        return (
          <Node
            key={id}
            id={id}
            value={value}
            editing={editing}
            depth={depth}
          />
        );
      }

      return (
        <Node key={id} id={id} value={value} editing={editing} depth={depth}>
          {renderNodes(tree.childrenNodes, depth + 1)}
        </Node>
      );
    });
  };

  return <div>{renderNodes(nodes, 0)}</div>;
}
