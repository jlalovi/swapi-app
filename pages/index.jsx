import Head from 'next/head';
import Header from 'components/Header';
import PageContainer from 'components/PageContainer';
import PageContent from 'components/PageContent';
import usePlanets from 'hooks/usePlanets';

export default function Home() {
  const { planets, isLoading, error } = usePlanets({ search: '', page: 1 });
  console.log(planets);
  return (
    <PageContainer>
      <Head>
        <title>SWAPI - Planets</title>
        <meta name="Planets" content="Planets of Star Wars Universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Planets" />
      <PageContent>
        <ul>
          {planets?.results.map((planet, key) => (
            <li key={key}>{planet.name}</li>
          ))}
        </ul>
      </PageContent>
    </PageContainer>
  );
}
