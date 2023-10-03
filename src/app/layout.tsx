/* eslint-disable @next/next/no-img-element */
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Atoms/global/Navbar'
import { Suspense } from 'react'
import Loading from './loading'
import UnderConstructionMessage from '@/components/Atoms/global/UnderConstructionMessage'
import NextTopLoader from 'nextjs-toploader'
import SocialLinks from '@/components/Atoms/global/SocialLinks'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krishna Tiwari',
  description: 'A full stack web developer proficient in MERN Stack, NextJS, Laravel',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className='h-screen overflow-auto flex flex-col backdrop-blur-sm'>
            <NextTopLoader showSpinner={false} />
            <UnderConstructionMessage />
            <Navbar />
            <Suspense fallback={<Loading />}>
              {children}
              <div className='absolute top-0 left-0 w-full h-full -z-10 overflow-hidden blur-sm'>
                <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png" alt="" className='w-20 absolute opacity-20 top-80 left-56' />
                <img src="https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png" alt="" className='w-24 absolute opacity-10 bottom-16 left-96' />
                <img src="https://static-00.iconduck.com/assets.00/laravel-icon-1990x2048-xawylrh0.png" alt="" className='w-20 absolute opacity-10 top-16 left-96' />
                <img src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png" alt="" className='w-20 absolute opacity-10 top-16 left-96 mt-40 ms-52' />
                <span className="text-7xl top-80 left-72 absolute ms-96 mt-44 opacity-10">
                  {`</>`}
                </span>
              </div>
            </Suspense>
          </main>
          <SocialLinks />
        </ThemeProvider>
      </body>
    </html>
  )
}