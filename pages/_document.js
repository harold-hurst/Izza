import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>IZZA - Authentic Pizza Shop</title>
        <meta name="description" content="Enjoy handcrafted, authentic pizzas made with fresh ingredients at IZZA. Order online or visit our shop for a true taste of Italy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <body className="antialiased text-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
