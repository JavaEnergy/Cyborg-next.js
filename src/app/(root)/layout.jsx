import { Helmet } from 'react-helmet-async';
import Script from 'next/script';

export default function RootGroupLayout({ children }) {
  return (
    <>
      <Script id="gtm-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `/* GTM code */` }} />
      <Script id="gtag-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `/* gtag code */` }} />
      {children}
    </>
  );
}