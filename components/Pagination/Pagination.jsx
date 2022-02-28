/* eslint-disable jsx-a11y/aria-role */
import PropTypes from 'prop-types';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import styles from 'styles/Pagination.module.scss';

export default function Pagination({
  page,
  setPage,
  totalItems,
  itemsInPage,
  itemsName,
  next,
  previous,
}) {
  const nPages = Math.ceil(totalItems / itemsInPage);

  return (
    <div className={styles.paginationContainer}>
      {previous ? (
        <AiFillCaretLeft
          className={styles.icon}
          onClick={() => setPage(page - 1)}
          role="previous-page-button"
        />
      ) : (
        <AiFillCaretLeft className={styles.invisibleIcon} />
      )}
      <span
        className={styles.legend}
      >{`${page} to ${nPages} of ${totalItems} ${itemsName}`}</span>
      {next ? (
        <AiFillCaretRight
          className={styles.icon}
          onClick={() => setPage(page + 1)}
          role="next-page-button"
        />
      ) : (
        <AiFillCaretRight className={styles.invisibleIcon} />
      )}
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsInPage: PropTypes.number.isRequired,
  itemsName: PropTypes.string.isRequired,
  next: PropTypes.bool.isRequired,
  previous: PropTypes.bool.isRequired,
};
