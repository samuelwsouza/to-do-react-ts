import rocketIcon from '../assets/rocket.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src={rocketIcon} alt="Foguete" />
        <p className={styles.paragraph}>
          to<span>do</span>
        </p>
      </div>
    </header>
  );
}
