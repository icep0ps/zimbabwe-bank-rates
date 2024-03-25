import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation/navigation';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
  title: 'Zimbabwe Bank Rate',
  description:
    'Explore real-time Zimbabwe ZWL bank rates on our website, offering a seamless platform to effortlessly convert and calculate USD to ZWL or any other currency. Customize your conversions with an optional percentage markup feature, providing flexibility and transparency in your currency transactions. Stay informed and make informed financial decisions with our comprehensive currency tools.',
};

const poppins = Manrope({
  weight: '500',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className + ' dark'}>
      <body className="bg-neutral-950">
        <main className="flex min-h-screen items-start justify-start gap-10 p-5 relative">
          <Navigation />
          <section className="grid grid-cols-[2fr_1fr] w-full relative">
            {children}
          </section>
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
