import PropTypes from 'prop-types';
import usePlanets from 'hooks/usePlanets';
import Pagination from 'components/Pagination';

export default function PlanetsContainer({ search, page, setPage }) {
  const { planets, isLoading, error } = usePlanets({ search, page });
  console.log(planets);
  return (
    <>
      <ul>
        {planets?.results.map((planet, key) => (
          <li key={key}>{planet.name}</li>
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
