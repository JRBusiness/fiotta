import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fiotta — AI That Works While You Sleep',
  description: 'Custom AI automation workflows for small businesses. Stop doing work AI can do for free.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
