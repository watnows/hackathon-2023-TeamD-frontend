import './globals.css'
import type { Metadata } from 'next'
import { Zen_Kaku_Gothic_New } from 'next/font/google'
import Header from '@/components/Header'
import { ApolloWrapper } from '@/lib/apollo-provider'
const zenkakugothicnew = Zen_Kaku_Gothic_New({
  weight: "400",
  subsets: ['latin']
})

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
      <body className={`${zenkakugothicnew.className} bg-background`}>
        <ApolloWrapper>
          <Header />
          <main className='min-h-screen md:max-w-[60%] max-w-[90%] m-auto p-12"'>
            {children}
          </main>
        </ApolloWrapper>
      </body>
    </html>
  )
}
