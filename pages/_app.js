import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FoodFlow – Delicious Food Delivered</title>
        <meta name="description" content="FoodFlow delivers hot, fresh meals right to your doorstep." />
        <link rel="icon" href="/favicon.ico?v=3" />

      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
