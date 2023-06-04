import { Montserrat } from 'next/font/google'
import {
  Header,
  Footer
} from '@/modules'
import './globals.scss'
import { AnimatePresence } from 'framer-motion'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'DP'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className='app'>
          <Header />
          <main className='main'>
            {children}
          </main>
          <Footer />
        </div>
        <div id='portal'>
        </div>
      </body>
    </html >
  )
}
