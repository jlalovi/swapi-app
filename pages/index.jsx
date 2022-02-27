import { useState } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import PageWrapper from 'components/PageWrapper';
import PageContent from 'components/PageContent';
import PlanetsContainer from 'components/PlanetsContainer';
import useInput from 'hooks/useInput';

export default function Home() {
  const [planetSearchValue, searchPlanetInput] = useInput({
    placeholder: 'search planet',
  });
  const [page, setPage] = useState(1);
  return (
    <PageWrapper>
      <Head>
        <title>SWAPI - Planets</title>
        <meta name="Planets" content="Planets of Star Wars Universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Planets">{searchPlanetInput}</Header>
      <PageContent>
        <PlanetsContainer
          search={planetSearchValue}
          page={page}
          setPage={setPage}
        />
      </PageContent>
    </PageWrapper>
  );
}
