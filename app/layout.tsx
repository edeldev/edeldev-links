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
  description: "Sitio web de enlaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <HeroProvider>
          <main className="dark text-foreground bg-background">{children}</main>
        </HeroProvider>
      </body>
    </html>
  );
}
