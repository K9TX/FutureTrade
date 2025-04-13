import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "K9TX Crypto Trade",
  description: "Crypto Paper Trading Platform",
  icons: {
    icon: '/logo.png', // This will use your logo.png as favicon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <div className="flex h-screen overflow-hidden bg-[#0B0E11]">
          <Sidebar />
          <div className="flex-1 overflow-auto">
            <main className="h-full w-full">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
