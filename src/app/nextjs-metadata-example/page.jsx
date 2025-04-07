import React from 'react';

// Static metadata
export const metadata = {
  title: 'Cyborg - Next.js Metadata Example',
  description: 'Welcome to Cyborg - IT Consulting and Web Development Services',
  openGraph: {
    title: 'Cyborg - IT Services & Web Development',
    description: 'Professional IT consulting and web development services',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cyborg',
      }
    ],
    url: 'https://yourdomain.com',
    type: 'website',
  },
  alternates: {
    canonical: 'https://yourdomain.com',
    languages: {
      'en': 'https://yourdomain.com/en',
      'de': 'https://yourdomain.com/de',
    }
  }
};

export default function MetadataExamplePage() {
  return (
    <div className="metadata-example-page">
      <h1>Next.js Metadata API Example</h1>
      <p>This page demonstrates Next.js's built-in metadata API for SEO.</p>
      
      <div className="metadata-explanation">
        <h2>Benefits of Next.js Metadata API:</h2>
        <ul>
          <li>Server-side metadata generation</li>
          <li>Better performance (no client-side JavaScript)</li>
          <li>Dynamic metadata with generateMetadata function</li>
          <li>Automatic handling of JSON-LD</li>
          <li>Improved SEO with server-rendered meta tags</li>
        </ul>
      </div>
    </div>
  );
} 