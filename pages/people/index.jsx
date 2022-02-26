import Head from 'next/head';
import Header from 'components/Header';
import PageWrapper from 'components/PageWrapper';
import PageContent from 'components/PageContent';

export default function Home() {
  return (
    <PageWrapper>
      <Head>
        <title>SWAPI - People</title>
        <meta name="People" content="Main Characters in Star Wars Universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="People" />
      <PageContent>People content</PageContent>
    </PageWrapper>
  );
}
