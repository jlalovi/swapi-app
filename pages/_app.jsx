import NavBar from 'components/NavBar';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;
