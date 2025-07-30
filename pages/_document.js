import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Front End Development Test</title>
        <meta name="description" content="Front End Development test" />
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
