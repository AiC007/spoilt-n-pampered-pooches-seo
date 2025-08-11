import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Spoilt ’n Pampered Pooches",
  description: "Premium dog grooming in Essex — mobile & salon services."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main className="max-w-6xl mx-auto px-4">{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
