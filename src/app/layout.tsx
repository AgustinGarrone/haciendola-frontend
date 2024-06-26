import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { montserrat } from "../../ui/fonts"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Haciendola :)",
  description: "Challenge para Haciendola",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: JSX.Element;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
