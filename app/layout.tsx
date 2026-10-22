import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

const description = 'Goran Stefanovski is a full-stack developer, team lead and project manager building web and mobile apps with React, React Native and Laravel.'

export const metadata: Metadata = {
  title: 'Goran Stefanovski - Full-Stack Developer & Team Lead | Tevidma',
  description,
  keywords: 'Goran Stefanovski, Tevidma, Full-Stack Developer, Team Lead, Project Manager, React Developer, React Native Developer, Laravel Developer, Next.js, Software Engineer, North Macedonia',
  metadataBase: new URL('https://tevidma.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Goran Stefanovski - Full-Stack Developer & Team Lead',
    description,
    url: 'https://tevidma.com',
    siteName: 'Tevidma',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goran Stefanovski - Full-Stack Developer & Team Lead',
    description,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  }
}

export default function RootLayout({  
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} 
      bg-gray-50 
      text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
            </ActiveSectionContextProvider>

            <ThemeSwitch />
          </ThemeContextProvider>
        </body>
    </html>
  )
}
