'use client';

import './globals.css';
import './i18n';

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

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
} 