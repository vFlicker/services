import { PropsWithChildren, useContext } from 'react';

import { Id } from '~/types';

import { StoreContext } from '../../store';
import { getColor } from './getColor';
import classes from './Node.module.css';

type NodeProps = PropsWithChildren<{
  id: Id;
  depth: number;
  value: string;
}>;

export function Node({ children, depth, value, id }: NodeProps) {
  const { addNodeAction, editNodeAction, removeNodeAction } =
    useContext(StoreContext);

  const isHead = depth === 0;

  const titleStyle = {
    color: isHead ? 'var(--black)' : 'var(--white)',
    backgroundColor: getColor(depth),
  };

  return (
    <div className={classes.node} id={id}>
      <div className={classes.wrapper}>
        <div className={classes.title} style={titleStyle}>
          {value}
        </div>
        <div className={classes.actions}>
          <button
            className={`${classes.action} ${classes.add}`}
            onClick={() => addNodeAction('ADDED', id)}
          >
            A
          </button>
          <button
            className={`${classes.action} ${classes.change}`}
            onClick={() => editNodeAction('CHANGED', id)}
          >
            C
          </button>
          <button
            className={`${classes.action} ${classes.remove}`}
            onClick={() => removeNodeAction(id)}
          >
            D
          </button>
        </div>
      </div>
      <div className={classes.children}>{children}</div>
    </div>
  );
}
