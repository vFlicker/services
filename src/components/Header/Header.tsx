import classes from './Header.module.css';

export function Header(): JSX.Element {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Services</h1>
      <div className={classes.controls}>
        <button>Minus</button>
        <button>Plus</button>
      </div>
    </header>
  );
}
