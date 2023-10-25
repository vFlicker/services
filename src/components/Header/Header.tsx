import { ChangeEvent, useContext } from 'react';

import { ZOOM_VALUES, ZoomContext, ZoomValue } from '~/contexts';

import classes from './Header.module.css';

export function Header(): JSX.Element {
  const { zoom, setZoomAction, decrementZoomAction, incrementZoomAction } =
    useContext(ZoomContext);

  const handleZoomChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(evt.target.value, 10) as ZoomValue;
    setZoomAction(value);
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Services</h1>
      <div className={classes.controls}>
        <button onClick={decrementZoomAction}>Minus</button>
        <select name="zoom" onChange={handleZoomChange}>
          {ZOOM_VALUES.map((value) => (
            <option key={value} value={value} selected={value === zoom}>
              {`${value}%`}
            </option>
          ))}
        </select>
        <button onClick={incrementZoomAction}>Plus</button>
      </div>
    </header>
  );
}
