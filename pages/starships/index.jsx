import Head from 'next/head';
import Header from 'components/Header';
import PageWrapper from 'components/PageWrapper';
import PageContent from 'components/PageContent';

export default function Home() {
  return (
    <PageWrapper>
      <Head>
        <title>SWAPI - Planets</title>
        <meta name="Starships" content="Starships of Star Wars Universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Starships" />
      <PageContent>Starships content</PageContent>
    </PageWrapper>
  );
}
