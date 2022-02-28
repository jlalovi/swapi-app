import PropTypes from 'prop-types';
import styles from 'styles/PageContent.module.scss';

export default function PageContainer({ children }) {
  return <section className={styles.pageContent}>{children}</section>;
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
