import React from 'react';
import Head from 'next/head';

const HelmetManager = ({
  title,
  description,
  canonical,
  alternateLanguages = [],
  openGraph = {},
  structuredData = {},
}) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Alternate Language Links */}
      {alternateLanguages.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={openGraph.title || title} />
      <meta property="og:description" content={openGraph.description || description} />
      <meta property="og:type" content={openGraph.type || 'website'} />
      <meta property="og:url" content={openGraph.url || canonical} />
      {openGraph.image && <meta property="og:image" content={openGraph.image} />}
      {openGraph.siteName && <meta property="og:site_name" content={openGraph.siteName} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={openGraph.title || title} />
      <meta name="twitter:description" content={openGraph.description || description} />
      {openGraph.image && <meta name="twitter:image" content={openGraph.image} />}

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default HelmetManager; 