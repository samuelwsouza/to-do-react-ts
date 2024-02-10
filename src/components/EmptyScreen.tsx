import styles from './EmptyScreen.module.css';
import clipboardIcon from '../assets/Clipboard.svg';

export function EmptyScreen() {
  return (
    <section className={styles.empty}>
      <img className={styles.img} src={clipboardIcon} alt="Tarefas vazias" />
      <p>
        <b>Você ainda não tem tarefas cadastradas</b>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </section>
  );
}
