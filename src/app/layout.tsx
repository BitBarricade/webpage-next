import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Jost } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import FavIcon from '@/components/FavIcon';
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import BackToTop from "@/components/BackToTop/BackToTop";
import "@/globals/style.css";
import "@/globals/style.scss";
const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "BitBarricade",
    template: "%s | BitBarricade"
  },
  description: "A digital agency comprised of intelligent and creative individuals",
  generator: "Next.Js",
  applicationName: "BitBarricade",
  referrer: "origin-when-cross-origin",
  keywords: [
    'BitBarricade', 
    'Bit Barricade', 
    'BitBarricade.in',
    'BitBarricade Official',
    'Bit Barricade Official',
    'BitBarricade Website'
  ],
  authors: [
    { 
      name: 'KrishnaJith' 
    }, 
    { 
      name: 'Nikhil' 
    },
    { 
      name: 'CRZA', 
      url: "https://crza.dev"
    }, 
    { 
      name: 'RJRYT', 
      url: 'https://rjryt.github.io' 
    }, 
  ],
  metadataBase: new URL("https://bitbarricade.in/"),
  alternates: {
    canonical: './'
  },
  openGraph: {
    title: {
      default: "BitBarricade",
      template: "%s | BitBarricade"
    },
    locale: 'en_US',
    type: "website",
    url: "https://bitbarricade.in/",
    description: "A digital agency comprised of intelligent and creative individuals",
    siteName: "BitBarricade",
    images: "/img/logo/icon.black.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <FavIcon />
      </head>
      <body className={`theme-color-bg ${jost.className}`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </ThemeProvider>
        <GoogleTagManager gtmId="G-04K7K9S10N" />
        <SpeedInsights />
      </body>
    </html>
  );
}
