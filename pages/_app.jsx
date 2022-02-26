import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <main className="appContainer">
      <section>
        <nav>Navigation</nav>
        <article>
          <header>Header</header>
          <section className="pageContent">
            <Component {...pageProps} />
          </section>
        </article>
      </section>
      <footer>Footer</footer>
    </main>
  );
}

export default MyApp;
