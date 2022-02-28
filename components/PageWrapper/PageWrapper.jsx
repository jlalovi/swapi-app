import PropTypes from 'prop-types';
import styles from 'styles/PageContainer.module.scss';

export default function PageWrapper({ children }) {
  return <section className={styles.pageContainer}>{children}</section>;
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
