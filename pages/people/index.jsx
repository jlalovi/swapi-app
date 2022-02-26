import Head from 'next/head';
import styles from 'styles/Home.module.scss';
import Header from 'components/Header';
import PageContainer from 'components/PageContainer';
import PageContent from 'components/PageContent';

export default function Home() {
  return (
    <PageContainer>
      <Head>
        <title>SWAPI - People</title>
        <meta name="People" content="Main Characters in Star Wars Universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="People" />
      <PageContent>People content</PageContent>
    </PageContainer>
  );
}
