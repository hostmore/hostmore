import './globals.css';
import type { ReactNode } from 'react';
import Navbar from './components/Navbar';
export const metadata = { title: 'TrackKol', description: 'Real-time Crypto KOL Tracking & Insights' };
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
