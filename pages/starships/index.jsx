import { useState } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import PageWrapper from 'components/PageWrapper';
import PageContent from 'components/PageContent';
import StarshipsContainer from 'components/StarshipsContainer';
import useInput from 'hooks/useInput';

export default function Home() {
  const [starshipsSearchValue, searchStarshipsInput] = useInput({
    placeholder: 'search starship',
  });
  const [page, setPage] = useState(1);
  return (
    <PageWrapper>
      <Head>
        <title>SWAPI - Starships</title>
        <meta name="Starships" content="Starships of Star Wars Universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Starships">{searchStarshipsInput}</Header>
      <PageContent>
        <StarshipsContainer
          search={starshipsSearchValue}
          page={page}
          setPage={setPage}
        />
      </PageContent>
    </PageWrapper>
  );
}
