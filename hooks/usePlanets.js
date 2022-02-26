import useSWR from 'swr';

const usePlanets = ({ search, page }) => {
  const { data, error } = useSWR(
    `https://swapi.dev/api/planets/?search=${search}&page=${page}`
  );

  return {
    planets: data,
    isLoading: !error && !data,
    error,
  };
};

export default usePlanets;
