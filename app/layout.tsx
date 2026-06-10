import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marada Sanghamitra | Product Manager & AI Platforms',
  description: 'Business System Analyst & Product Manager specializing in AI-powered enterprise platforms. 5+ years at ServiceNow, 30,000+ users served.',
  keywords: [
    'Product Manager',
    'Business Analyst',
    'AI/ML',
    'Enterprise SaaS',
    'ServiceNow',
    'Product Strategy',
    'Leadership'
  ],
  authors: [{ name: 'Marada Sanghamitra' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sanghamitra.com',
    siteName: 'Marada Sanghamitra',
    title: 'Marada Sanghamitra | Product Manager & AI Platforms',
    description: 'Business System Analyst & Product Manager specializing in AI-powered enterprise platforms.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marada Sanghamitra | Product Manager & AI Platforms',
    description: 'Business System Analyst & Product Manager specializing in AI-powered enterprise platforms.'
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow'
  },
  verification: {
    google: 'verification_token'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2667a3" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Person',
              name: 'Marada Sanghamitra',
              url: 'https://sanghamitra.com',
              jobTitle: 'Product Manager & Business System Analyst',
              email: 'mitra.marada143@gmail.com',
              sameAs: [
                'https://linkedin.com/in/sanghamitra-marada-0a30a73b3/'
              ],
              knowsAbout: [
                'Product Management',
                'AI/ML',
                'Enterprise SaaS',
                'Business Analytics',
                'Agile',
                'Product Strategy'
              ]
            })
          }}
        />
      </head>
      <body className="bg-white dark:bg-slate-950">
        {children}
      </body>
    </html>
  )
}
