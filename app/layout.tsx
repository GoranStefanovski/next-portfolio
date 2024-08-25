import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Goran | Personal Portfolio',
  description: 'Experienced Full-Stack Developer with 5 years of expertise in building dynamic, responsive web applications, with main focus on React and Vue.js. Explore my portfolio to see how I turn complex ideas into innovative digital solutions.',
  keywords: 'Full-Stack Developer, Web Development, JavaScript Developer, React Developer, Vue.js Developer, Front-End Development, Back-End Development, Full-Stack Engineer, Responsive Web Design, Modern Web Technologies, Node.js Developer, Software Engineer, Goran Stefanovski Portfolio, Front-End Expert, Web Application Developer'
}

export default function RootLayout({  
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:keywords" content={metadata.keywords} />
        <meta property="og:url" content="https://tevidma.com" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
