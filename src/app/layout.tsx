import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Isu demo template',
  description: 'A template project to show off react at isu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
