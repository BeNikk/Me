import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nikhil",
  description: "About Me",
  icons: {
    icon: '/favicon.ico', // For browsers
    apple: '/favicon.ico', // For Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html >
  );
}
