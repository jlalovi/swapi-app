import styles from 'styles/PageContainer.module.scss';

export default function PageContainer({ children }) {
  return <section className={styles.pageContainer}>{children}</section>;
}
