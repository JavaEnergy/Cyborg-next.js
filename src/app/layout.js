import './globals.css';

export const metadata = {
  title: 'Cyborg IT Technology',
  description: 'High-quality IT solutions, consulting, and web development services.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/assets/images/logo/Cyborg-logo 11-11.png" type="image/x-icon" />
      </head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLKPSBWZ" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <h1 className="visually-hidden">Cyborg IT Technology</h1>
        {children}
      </body>
    </html>
  );
} 