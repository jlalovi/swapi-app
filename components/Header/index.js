import PropTypes from 'prop-types';
import styles from 'styles/Header.module.scss';

export default function Header({ title, children }) {
  return (
    <>
      <header className={styles.pageHeader}>{title}</header>
      {children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
