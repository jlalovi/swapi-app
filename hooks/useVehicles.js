import useSWR from 'swr';

const useVehicles = ({ search, page }) => {
  const { data, error } = useSWR(
    `https://swapi.dev/api/vehicles/?search=${search}&page=${page}`
  );

  return {
    vehicles: data,
    isLoading: !error && !data,
    error,
  };
};

export default useVehicles;
