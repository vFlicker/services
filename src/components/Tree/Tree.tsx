import { useContext } from 'react';

import { NodeData } from '~/types';

import { StoreContext } from '../../store';
import { Node } from '../Node';

export function Tree(): JSX.Element {
  const { nodes } = useContext(StoreContext);

  const renderNodes = (trees: NodeData[], depth: number) => {
    return trees.map((tree) => {
      if (!tree.childrenNodes.length) {
        return (
          <Node key={tree.id} id={tree.id} value={tree.value} depth={depth} />
        );
      }

      return (
        <Node key={tree.id} id={tree.id} value={tree.value} depth={depth}>
          {renderNodes(tree.childrenNodes, depth + 1)}
        </Node>
      );
    });
  };

  return <div>{renderNodes(nodes, 0)}</div>;
}
