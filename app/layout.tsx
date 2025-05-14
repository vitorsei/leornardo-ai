import type { Metadata } from "next";
import { UIProvider } from "@/components/UIProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import UserProvider from "@/context/UserContext";
import { Box } from "@chakra-ui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick and Morty Explorer",
  description: "Rick and Morty Explorer - Leonardo AI",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UIProvider>
          <div className="flex flex-grow-1 h-full min-h-screen">
            <UserProvider>
              <Box as="main" w="full">
                {children}
              </Box>
              <Footer />
            </UserProvider>
          </div>
        </UIProvider>
      </body>
    </html>
  );
}
