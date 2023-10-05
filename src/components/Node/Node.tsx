import { PropsWithChildren, useContext, useState } from 'react';

import { Id } from '~/types';

import { StoreContext } from '../../store';
import { getColor } from './getColor';
import classes from './Node.module.css';

type NodeProps = PropsWithChildren<{
  id: Id;
  editing: boolean;
  value: string;
  depth: number;
}>;

type StaticFieldProps = {
  id: Id;
  depth: number;
  value: string;
};

type EditingFieldProps = {
  id: Id;
  value: string;
};

export function Node({ id, children, editing, value, depth }: NodeProps) {
  return (
    <div className={classes.node} id={id}>
      {editing ? (
        <EditingField id={id} value={value} />
      ) : (
        <StaticField depth={depth} id={id} value={value} />
      )}
      <div className={classes.children}>{children}</div>
    </div>
  );
}

function StaticField({ depth, value, id }: StaticFieldProps): JSX.Element {
  const { addNodeAction, editNodeAction, removeNodeAction } =
    useContext(StoreContext);

  const isHead = depth === 0;
  const titleStyle = {
    color: isHead ? 'var(--black)' : 'var(--white)',
    backgroundColor: getColor(depth),
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.title} style={titleStyle}>
        {value}
      </div>
      <div className={classes.actions}>
        <button
          className={`${classes.action} ${classes.add}`}
          onClick={() => addNodeAction(id)}
        >
          A
        </button>
        <button
          className={`${classes.action} ${classes.edit}`}
          onClick={() => editNodeAction(id)}
        >
          E
        </button>
        <button
          className={`${classes.action} ${classes.remove}`}
          onClick={() => removeNodeAction(id)}
        >
          D
        </button>
      </div>
    </div>
  );
}

function EditingField({ value, id }: EditingFieldProps): JSX.Element {
  const { saveNodeAction, removeNodeAction } = useContext(StoreContext);

  const [nodeValue, setNodeValue] = useState(value);

  return (
    <div className={classes.wrapper}>
      <input
        className={classes.input}
        type="text"
        placeholder="Category name"
        value={nodeValue}
        onChange={(evt) => setNodeValue(evt.target.value)}
      />
      <div className={classes.actions}>
        <button
          className={`${classes.action} ${classes.save}`}
          onClick={() => saveNodeAction(nodeValue, id)}
        >
          S
        </button>
        <button
          className={`${classes.action} ${classes.remove}`}
          onClick={() => removeNodeAction(id)}
        >
          D
        </button>
      </div>
    </div>
  );
}
