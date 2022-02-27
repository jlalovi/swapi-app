import PropTypes from 'prop-types';
import styles from 'styles/Header.module.scss';

export default function Header({ title, children }) {
  return (
    <>
      <h1 className={styles.pageHeader}>{title}</h1>
      {children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
