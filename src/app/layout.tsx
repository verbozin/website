import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Verbo Zin Institute",
    template: "%s | Verbo Zin Institute",
  },
  description:
    "Saciando a fome e semeando a palavra de Deus. Promovemos o ensino da Bíblia e ações missionárias para atender necessidades espirituais e materiais.",
  keywords: [
    "ONG",
    "instituto bíblico",
    "ações sociais",
    "doações",
    "caridade",
    "Verbo Zin",
  ],
  authors: [{ name: "Verbo Zin Institute" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Verbo Zin Institute",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
