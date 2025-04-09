import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import { HeroProvider } from "./HeroProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edeldev | Links",
  description:
    "Diseño y desarrollo de páginas web modernas, responsivas y optimizadas para atraer clientes. ¡Lleva tu presencia digital al siguiente nivel!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <HeroProvider>
          <main className="dark text-foreground bg-background">{children}</main>
        </HeroProvider>
      </body>
    </html>
  );
}
