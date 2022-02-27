import PropTypes from 'prop-types';
import styles from 'styles/Card.module.scss';

export default function Card({ data, type }) {
  return (
    <li className={styles.itemList}>
      <h2>{data.name}</h2>
    </li>
  );
}

Card.propTypes = {
  data: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
