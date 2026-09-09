import type { Metadata } from "next";
import { Jost, Inter, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.balandran.mx"),
  title: {
    default: "Balandrán | Defensa Fiscal y Aduanera en León, Guanajuato",
    template: "%s | Balandrán Defensa Fiscal y Aduanera",
  },
  description:
    "Despacho especializado en defensa fiscal y aduanera en León, Guanajuato. Atendemos auditorías del SAT, PAMAs, litigio fiscal y amparos. Consultoría preventiva para empresas.",
  keywords: [
    "defensa fiscal León",
    "defensa aduanera",
    "PAMA",
    "auditoría SAT",
    "litigio fiscal Guanajuato",
    "amparo fiscal",
    "abogado fiscalista León",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Balandrán Defensa Fiscal y Aduanera",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <body
        className={`${jost.variable} ${inter.variable} ${plexMono.variable} font-body antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
