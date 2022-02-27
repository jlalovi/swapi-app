import PropTypes from 'prop-types';
import styles from 'styles/Header.module.scss';

export default function Header({ title, children }) {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>Imperial destroyers center</header>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
