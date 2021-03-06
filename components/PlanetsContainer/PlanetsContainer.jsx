import { useEffect } from 'react';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import usePlanets from 'hooks/usePlanets';
import Pagination from 'components/Pagination';
import Card from 'components/Card';

export default function PlanetsContainer({ search, page, setPage }) {
  const { planets, isLoading } = usePlanets({ search, page });
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
        {planets?.results?.map((planet, key) => (
          <Card key={key} type="planets" data={planet} />
        ))}
      </ul>
      {planets && (
        <Pagination
          page={page}
          setPage={setPage}
          totalItems={planets.count}
          itemsInPage={10}
          itemsName="planets"
          next={Boolean(planets.next)}
          previous={Boolean(planets.previous)}
        />
      )}
    </>
  );
}

PlanetsContainer.propTypes = {
  search: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
