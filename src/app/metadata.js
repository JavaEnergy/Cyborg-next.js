export const metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'Cyborg - IT Consulting & Web Development',
    template: '%s | Cyborg IT',
  },
  description: 'Expert IT consulting and web development services for businesses. We provide Zoho CRM solutions, custom web development, and IT strategy.',
  keywords: ['IT consulting', 'web development', 'Zoho consulting', 'IT strategy', 'custom web applications', 'Germany'],
  openGraph: {
    title: 'Cyborg - IT Consulting & Web Development',
    description: 'Expert IT consulting and web development services for businesses. We provide Zoho CRM solutions, custom web development, and IT strategy.',
    url: 'https://yourdomain.com',
    siteName: 'Cyborg IT',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cyborg IT Services',
      },
    ],
    locale: 'de-DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyborg - IT Consulting & Web Development',
    description: 'Expert IT consulting and web development services for businesses.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://yourdomain.com',
    languages: {
      'en': 'https://yourdomain.com/en',
      'de': 'https://yourdomain.com',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
} 