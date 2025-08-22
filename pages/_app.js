import '../styles/globals.css';
import Head from 'next/head';

/**
 * Custom App component to wrap all pages. We include our global
 * styles here and load Ionicons from a CDN so that the <ion-icon>
 * elements used throughout the site render correctly. This file
 * is executed once on the client and server for each page.
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Load Ionicons from the unpkg CDN */}
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}