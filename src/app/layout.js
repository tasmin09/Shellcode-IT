import { Inter } from "next/font/google";
import "./globals.css";
import "./custom.css";
import "@/assets/fonts/cash-display/css/clash-display.css";
import "@/assets/fonts/sf-pro/stylesheet.css";
import FacebookPixelScript from "@/components/FacebookPixelScript"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShellCode Solutions",
  description: "We bring your business on internet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FacebookPixelScript />
      <body className={inter.className}>{children} </body>
    </html>
  );
}
