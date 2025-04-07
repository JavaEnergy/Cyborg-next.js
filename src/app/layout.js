import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Cyborg IT Technology',
  description: 'High-quality IT solutions, consulting, and web development services.',
  openGraph: {
    title: 'Cyborg IT Technology',
    description: 'High-quality IT solutions, consulting, and web development services.',
    url: 'https://cyborg-it.de/de',
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
  alternates: {
    canonical: 'https://cyborg-it.de/de',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/assets/images/logo/Cyborg-logo 11-11.png" type="image/x-icon" />
      </head>
      <body>
        {/* Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MLKPSBWZ');
          `}
        </Script>

        {/* Conversion Event Snippet */}
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            window.gtagSendEvent = function() {
              gtag('event', 'conversion_event_submit_lead_form_4', {
                // Additional event parameters can be added here
              });
            };
          `}
        </Script>

        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLKPSBWZ" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        
        {/* Visually hidden H1 for SEO */}
        <h1 className="visually-hidden">Cyborg IT Technology</h1>
        
        {children}
      </body>
    </html>
  );
} 