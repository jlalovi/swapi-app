import { SWRConfig } from 'swr';
import NavBar from 'components/NavBar';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        // I know that the DB of all the requests is not going to change
        // frequently, so I improve the performance with less requests and
        // use the swr cache
        revalidateIfStale: false,
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
      }}
    >
      <main className="appContainer">
        <section>
          <nav>
            <NavBar />
          </nav>
          <article className="pageContent">
            <Component {...pageProps} />
          </article>
        </section>
        <footer>Footer</footer>
      </main>
    </SWRConfig>
  );
}

export default MyApp;
