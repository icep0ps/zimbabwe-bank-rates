import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navigation from '@/components/navigation/navigation';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
  title: 'Zimbabwe Bank Rate',
  description:
    'Explore real-time Zimbabwe ZWL bank rates on our website, offering a seamless platform to effortlessly convert and calculate USD to ZWL or any other currency. Customize your conversions with an optional percentage markup feature, providing flexibility and transparency in your currency transactions. Stay informed and make informed financial decisions with our comprehensive currency tools.',
};

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className + ' dark'}>
      <body className="bg-background">
        <main className="flex flex-col min-h-screen items-start justify-start gap-10 relative w-9/12 max-lg:w-11/12 max-lg:px-2">
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
