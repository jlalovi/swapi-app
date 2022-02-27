import { useState } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import PageWrapper from 'components/PageWrapper';
import PageContent from 'components/PageContent';
import PeopleContainer from 'components/PeopleContainer';
import useInput from 'hooks/useInput';

export default function Home() {
  const [peopleSearchValue, searchPeopleInput] = useInput({
    placeholder: 'search people',
  });
  const [page, setPage] = useState(1);
  return (
    <PageWrapper>
      <Head>
        <title>SWAPI - People</title>
        <meta name="People" content="Main characters of Star Wars Universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="People">{searchPeopleInput}</Header>
      <PageContent>
        <PeopleContainer
          search={peopleSearchValue}
          page={page}
          setPage={setPage}
        />
      </PageContent>
    </PageWrapper>
  );
}
