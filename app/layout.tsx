import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "DocFinder - Trouvez le médecin idéal près de chez vous",
  description:
    "DocFinder vous aide à trouver les meilleurs médecins dans votre région, à prendre rendez-vous en ligne et à consulter les avis des patients.",
  keywords: "médecin, rendez-vous médical, docteur, santé, consultation, spécialiste",
  authors: [{ name: "DocFinder Team" }],
  creator: "DocFinder",
  publisher: "DocFinder",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'