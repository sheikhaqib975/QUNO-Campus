import React from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Header from './Components/Header';
import Footer from './Components/Footer';
import "./global.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'QUNO CAMPUS',
  description: 'QUNO CAMPUS',
  icons: {
    icon: '/qunologo.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
