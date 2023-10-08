import { DragEvent, useContext } from 'react';

import { NodeData } from '~/types';

import { TreeStoreContext } from '../../stores';
import { Node } from '../Node';
import classes from './Tree.module.css';

type TreeProps = {
  onDragStart: (evt: DragEvent<HTMLDivElement>) => void;
  onDrag: (evt: DragEvent<HTMLDivElement>) => void;
};

export function Tree({ onDrag, onDragStart }: TreeProps): JSX.Element {
  const { nodes } = useContext(TreeStoreContext);

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

  return (
    <div
      className={classes.treeWrapper}
      draggable
      onDrag={onDrag}
      onDragStart={onDragStart}
    >
      {renderNodes(nodes, 0)}
    </div>
  );
}
