import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Jost } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import FavIcon from '@/components/FavIcon';
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import "@/globals/style.css";
import "@/globals/style.scss";
const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BitBarricade",
  description: "BitBarricade Solutions",
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
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
