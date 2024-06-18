import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    default: "Home",
    template: "%s | BitBarricade"
  },
  description: "A digital agency comprised of intelligent and creative individuals",
  generator: "Next. Js",
  applicationName: "BitBarricade",
  referrer: "origin-when-cross-origin",
  keywords: [
    'BitBarricade', 
    'Bit Barricade', 
    'BitBarricade.in'
  ],
  authors: [
    { 
      name: 'CRZA', 
      url: "https://crza.dev"
    }, 
    { 
      name: 'RJRYT', 
      url: 'https://rjryt.github.io' 
    }, 
    { 
      name: 'KrishnaJith' 
    }, 
    { 
      name: 'Nikhil' 
    }
  ],
  metadataBase: new URL("https://bitbarricade.in/"),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: {
      default: "Home",
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
        <SpeedInsights />
      </body>
    </html>
  );
}
