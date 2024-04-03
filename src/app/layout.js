// import { Inter } from "next/font/google";
import NavbarComponent from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import ContextInformasiProvider from "@/context";
import { ThemeModeScript } from "flowbite-react";
import ButtonWhatsApp from "@/components/ButtonWhatsApp";
import ButtonGoTop from "@/components/ButtonGoTop";
import ProgresBar from "@/components/Progres";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Batik",
  description: "Perusahaan batik website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="html" className="scroll-smooth">
      <head>
        <ThemeModeScript />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>

      <body>
        <ContextInformasiProvider>
          <ProgresBar />
          <NavbarComponent />
          <main className="bg-primary">{children}</main>
          <ButtonGoTop />
          <ButtonWhatsApp />
          <Footer />
        </ContextInformasiProvider>

        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
