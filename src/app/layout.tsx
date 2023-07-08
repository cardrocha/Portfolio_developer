import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Header from './components/Header/page';
import Footer from './components/Footer/page';

const roboto = Roboto({ subsets: ['latin'],weight: ["100", "300", "400", "500", "700", "900"]})

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Dev Front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
