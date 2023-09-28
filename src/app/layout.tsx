import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Atoms/global/Navbar'
import { Suspense } from 'react'
import Loading from './loading'
import UnderConstructionMessage from '@/components/Atoms/global/UnderConstructionMessage'
import NextTopLoader from 'nextjs-toploader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krishna Tiwari',
  description: 'A full stack web developer proficient in MERN Stack, NextJS, Laravel',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.jpeg" sizes="any" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className='h-screen overflow-auto flex flex-col'>
            <NextTopLoader showSpinner={false} />
            <UnderConstructionMessage />
            <Navbar />
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}