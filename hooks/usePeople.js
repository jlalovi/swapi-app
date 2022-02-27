import useSWR from 'swr';

const usePeople = ({ search, page }) => {
  const { data, error } = useSWR(
    `https://swapi.dev/api/people/?search=${search}&page=${page}`
  );

  return {
    people: data,
    isLoading: !error && !data,
    error,
  };
};

export default usePeople;
