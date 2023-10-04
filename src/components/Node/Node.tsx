import { PropsWithChildren } from 'react';

import { getColor } from './getColor';
import classes from './Node.module.css';

type NodeProps = PropsWithChildren<{
  id: string;
  depth: number;
  value: string;
}>;

export function Node({ children, depth, value }: NodeProps) {
  const isHead = depth === 0;

  const titleStyle = {
    color: isHead ? 'var(--black)' : 'var(--white)',
    backgroundColor: getColor(depth),
  };

  return (
    <div className={classes.node}>
      <div className={classes.wrapper}>
        <div className={classes.title} style={titleStyle}>
          {value}
        </div>
        <div className={classes.actions}>
          <button className={`${classes.action} ${classes.add}`}>A</button>
          <button className={`${classes.action} ${classes.change}`}>C</button>
          <button className={`${classes.action} ${classes.remove}`}>D</button>
        </div>
      </div>
      <div className={classes.children}>{children}</div>
    </div>
  );
}
