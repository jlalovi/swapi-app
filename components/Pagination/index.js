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
    <div>
      {previous && <AiFillCaretLeft onClick={() => setPage(page - 1)} />}
      <span
        className={styles.legend}
      >{`${page} to ${nPages} of ${totalItems} ${itemsName}`}</span>
      {next && <AiFillCaretRight onClick={() => setPage(page + 1)} />}
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
