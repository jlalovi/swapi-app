import Head from 'next/head';
import Header from 'components/Header';
import PageWrapper from 'components/PageWrapper';
import PageContent from 'components/PageContent';

export default function Home() {
  return (
    <PageWrapper>
      <Head>
        <title>SWAPI - Vehicles</title>
        <meta name="Vehicles" content="Vehicles of Star Wars Universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Vehicles" />
      <PageContent>Vehicles content</PageContent>
    </PageWrapper>
  );
}
