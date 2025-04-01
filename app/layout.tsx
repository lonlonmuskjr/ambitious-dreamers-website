import type { Metadata } from 'next';
import './app/global.css';

export const meta


data: Metadata = {
  title: 'Ambitious Dreams - Credit Repair Services',
  description: 'Transform your credit score and financial future with our expert credit repair services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}



