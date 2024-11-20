import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Sarvesh T S - Cybersecurity Professional',
  description: 'Portfolio website showcasing cybersecurity expertise and projects',
  keywords: 'cybersecurity, portfolio, developer, security expert, Bangalore',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        {children}
        <div id="portal-root"></div>
      </body>
    </html>
  )
}