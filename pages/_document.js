import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google AdSense Script (replace with your actual AdSense code in production) */}
        {process.env.NODE_ENV === 'production' && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
            crossOrigin="anonymous"
          />
        )}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Meta tags for SEO */}
        <meta name="description" content="Learn about vibe coding, the AI-dependent programming practice that is revolutionizing how developers build software." />
        <meta name="keywords" content="vibe coding, AI programming, AI-dependent programming, coding with AI, artificial intelligence, software development" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="VibeCoding - AI-Dependent Programming Practice" />
        <meta property="og:description" content="Learn about vibe coding, the AI-dependent programming practice that is revolutionizing how developers build software." />
        <meta property="og:image" content="/images/vibe-coding-social.jpg" />
        <meta property="og:url" content="https://vibecoding.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VibeCoding - AI-Dependent Programming Practice" />
        <meta name="twitter:description" content="Learn about vibe coding, the AI-dependent programming practice that is revolutionizing how developers build software." />
        <meta name="twitter:image" content="/images/vibe-coding-social.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 