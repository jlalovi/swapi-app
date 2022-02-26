import Head from 'next/head';
import styles from 'styles/Home.module.scss';
import Header from 'components/Header';
import PageContainer from 'components/PageContainer';
import PageContent from 'components/PageContent';

export default function Home() {
  return (
    <PageContainer>
      <Head>
        <title>SWAPI - Planets</title>
        <meta name="Starships" content="Starships of Star Wars Universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Starships" />
      <PageContent>Starships content</PageContent>
    </PageContainer>
  );
}
