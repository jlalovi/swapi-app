import { useEffect } from 'react';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import useStarships from 'hooks/useStarships';
import Pagination from 'components/Pagination';
import Card from 'components/Card';
import { sortStarships } from './sortStarships';

export default function StarshipsContainer({
  search,
  page,
  setPage,
  sortValue,
}) {
  const { starships, isLoading } = useStarships({ search, page });
  useEffect(() => {
    if (isLoading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [isLoading]);

  const sortedStarships = starships?.results
    ? sortStarships(starships.results, sortValue)
    : [];

  return (
    <>
      <ul>
        {sortedStarships.map((starship, key) => (
          <Card key={key} type="starships" data={starship} />
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
  sortValue: PropTypes.string.isRequired,
};
