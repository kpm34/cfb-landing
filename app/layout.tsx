import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CFB Fantasy',
  description: 'College Football Fantasy Landing',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
