import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  <link
  href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
