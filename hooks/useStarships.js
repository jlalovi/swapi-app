import useSWR from 'swr';

const useStarships = ({ search, page }) => {
  const { data, error } = useSWR(
    `https://swapi.dev/api/starships/?search=${search}&page=${page}`
  );

  return {
    starships: data,
    isLoading: !error && !data,
    error,
  };
};

export default useStarships;
