import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
import NavBar from './components/NavBar'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const poppins = Poppins({ subsets: ['latin'] ,weight:["400","500","600","700"]}
)

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#EFF6FF]'>
      <body className={poppins.className}>
        <Header/>
        <NavBar/>
        {children}
      </body>
      </body>
    </html>
  )
} 
