import "~/styles/globals.css"

import { geistMono, geistSans } from "~/config/font"
import { siteConfig } from "~/config/site"

import type { LayoutProps } from "~/types/layout"

export const metadata = siteConfig

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans tracking-tight antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
