import { useEffect } from 'react';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import useStarships from 'hooks/useStarships';
import Pagination from 'components/Pagination';

export default function StarshipsContainer({ search, page, setPage }) {
  const { starships, isLoading } = useStarships({ search, page });
  useEffect(() => {
    if (isLoading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [isLoading]);
  return (
    <>
      <ul>
        {starships?.results.map((planet, key) => (
          <li key={key}>{planet.name}</li>
        ))}
      </ul>
      {starships && (
        <Pagination
          page={page}
          setPage={setPage}
          totalItems={starships.count}
          itemsInPage={10}
          itemsName="starships"
          next={Boolean(starships.next)}
          previous={Boolean(starships.previous)}
        />
      )}
    </>
  );
}

StarshipsContainer.propTypes = {
  search: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
