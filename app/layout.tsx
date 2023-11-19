import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetBrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'AJ Ancheta',
  description: 'Portfolio | AJ Ancheta',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jetBrains.className} text-main-primary`}>{children}</body>
    </html>
  )
}
