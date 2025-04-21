'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import './i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cyborg IT Technology',
  description: 'High-quality IT solutions, consulting, and web development services.',
  openGraph: {
    title: 'Cyborg IT Technology',
    description: 'High-quality IT solutions, consulting, and web development services.',
    url: 'https://cyborg-it.de',
    siteName: 'Cyborg IT Technology',
    images: [
      {
        url: 'https://cyborg-it.de/assets/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'de_DE',
    type: 'website',
  },
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang || 'en'}>
      <head>
        <link rel="icon" href="/Cyborg-logo 11-11.png" type="image/png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 