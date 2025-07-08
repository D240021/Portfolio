import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mi portafolio',
  generator: 'Daniel Barrantes Quirós',
  icons: {
    icon: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Ctext%20y%3D%22.9em%22%20font-size%3D%2290%22%3E%F0%9F%92%BB%3C/text%3E%3C/svg%3E"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CR">
      <body>{children}</body>
    </html>
  )
}
