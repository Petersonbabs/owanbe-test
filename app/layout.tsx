import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NewsletterPopup from "./components/ui/NewsLetterPopup";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Mofai Foods",
  description: "Online Food ordering and delivery service",
  icons: {
    icon: "/brand/mofai-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>
        <Navbar />
        <div className="">{children}</div>
        <Footer />
        <NewsletterPopup />
      </body>
    </html>
  );
}
