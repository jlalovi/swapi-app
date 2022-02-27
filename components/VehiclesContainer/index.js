import PropTypes from 'prop-types';
import useVehicles from 'hooks/useVehicles';
import Pagination from 'components/Pagination';

export default function VehiclesContainer({ search, page, setPage }) {
  const { vehicles, isLoading, error } = useVehicles({ search, page });
  return (
    <>
      <ul>
        {vehicles?.results.map((planet, key) => (
          <li key={key}>{planet.name}</li>
        ))}
      </ul>
      {vehicles && (
        <Pagination
          page={page}
          setPage={setPage}
          totalItems={vehicles.count}
          itemsInPage={10}
          itemsName="vehicles"
          next={Boolean(vehicles.next)}
          previous={Boolean(vehicles.previous)}
        />
      )}
    </>
  );
}

VehiclesContainer.propTypes = {
  search: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
