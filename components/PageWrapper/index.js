import styles from 'styles/PageContainer.module.scss';

export default function PageWrapper({ children }) {
  return <section className={styles.pageContainer}>{children}</section>;
}
