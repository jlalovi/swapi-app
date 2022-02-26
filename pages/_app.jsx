import Image from 'next/image';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <main className="appContainer">
      <section>
        <nav>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
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
