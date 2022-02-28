import PropTypes from 'prop-types';
import Router from 'next/router';
import { SWRConfig } from 'swr';
import NavBar from 'components/NavBar';
import 'styles/globals.scss';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        // I know that the DB of all the requests is not going to change
        // frequently, so I improve the performance with less requests and
        // use the swr cache
        /* revalidateIfStale: false, */
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
        <footer>
          Made by <i>Javier Latorre López-Villalta</i>
        </footer>
      </main>
    </SWRConfig>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.any,
};
