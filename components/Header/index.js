import styles from 'styles/Header.module.scss';

export default function Header({ title, children }) {
  return (
    <>
      <header className={styles.pageHeader}>{title}</header>
      {children}
    </>
  );
}
