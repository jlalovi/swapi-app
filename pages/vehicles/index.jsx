import { useState } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import PageWrapper from 'components/PageWrapper';
import PageContent from 'components/PageContent';
import VehiclesContainer from 'components/VehiclesContainer';
import useInput from 'hooks/useInput';

export default function Home() {
  const [vehiclesSearchValue, searchVehiclesInput] = useInput({
    placeholder: 'search vehicles',
  });
  const [page, setPage] = useState(1);
  return (
    <PageWrapper>
      <Head>
        <title>SWAPI - Vehicles</title>
        <meta name="Vehicles" content="Vehicles of Star Wars Universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Vehicles">{searchVehiclesInput}</Header>
      <PageContent>
        <VehiclesContainer
          search={vehiclesSearchValue}
          page={page}
          setPage={setPage}
        />
      </PageContent>
    </PageWrapper>
  );
}
