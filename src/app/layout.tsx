import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CinematicFooter } from "@/components/ui/motion-footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olivia Todesco | Productos, empresas e historias",
  description:
    "Desarrolladora de software, cofundadora de Nebula Solutions, creadora de contenido, diseñadora UI/UX y actriz. Construyo productos digitales que conectan tecnología con personas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-theme="tech"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgressBar />
          <Navbar />
          {children}
          <CinematicFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
