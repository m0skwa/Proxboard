import { Geist, Geist_Mono, Noto_Sans } from "next/font/google"

import { Metadata } from 'next';

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: 'Proxboard',
  description: 'A simple dashboard for organizing and accessing your homelab services in one place. Easily store, manage, and navigate all your self-hosted app links with a clean and minimal interface. ',
  metadataBase: new URL('https://github.com/m0skwa/Proxboard'),
};

const myStyle = {
  backgroundImage:
    "url('./wallpaper.webp')",
  height: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", notoSans.variable)}
    >
      <body style={myStyle}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
