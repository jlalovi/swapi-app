import usePlanets from 'hooks/usePlanets';

export default function PlanetsContainer({ search, page }) {
  const { planets, isLoading, error } = usePlanets({ search, page });
  console.log(planets);
  return (
    <ul>
      {planets?.results.map((planet, key) => (
        <li key={key}>{planet.name}</li>
      ))}
    </ul>
  );
}
