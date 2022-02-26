import { SWRConfig } from 'swr';
import NavBar from 'components/NavBar';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        /* refreshInterval: 60000, */
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
