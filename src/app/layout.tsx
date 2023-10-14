import './globals.css'
import { ApolloWrapper } from '@/lib/apollo-wrapper';
import { ContactProvider } from '@/contexts/ContactContext';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Phone Book - Reach Out and Touch Someone",
  description: "Your Universal Directory!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`grainy ${inter.className}`}>
        <ApolloWrapper>
          <ContactProvider>
            <Toaster />
            {children}
          </ContactProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
