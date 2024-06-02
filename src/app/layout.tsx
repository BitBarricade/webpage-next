import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import FavIcon from '@/components/FavIcon';
import "@/globals/style.css";
import "@/globals/style.scss";
import "@/globals/bootstrap.min.css";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
