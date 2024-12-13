import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Luka Gligorevic's Frontend Developer Portfolio"
        />
        <meta
          name="keywords"
          content="Frontend Developer, React, React Native, JavaScript, TypeScript, Next.js, Web Development"
        />
        <meta name="author" content="Luka Gligorevic" />
        <meta
          property="og:title"
          content="Luka Gligorevic | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Explore Luka Gligorevic's portfolio showcasing skills in React, JavaScript, and more."
        />
        <meta property="og:image" content="URL to your image" />
        <meta property="og:url" content="https://www.rhapsodymedia.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@gligor99" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
