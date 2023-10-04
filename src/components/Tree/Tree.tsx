import { NodeData } from '~/types';

import { Node } from '../Node';

type TreeProps = {
  data: NodeData[];
};

export function Tree({ data }: TreeProps): JSX.Element {
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

  return <div>{renderNodes(data, 0)}</div>;
}
