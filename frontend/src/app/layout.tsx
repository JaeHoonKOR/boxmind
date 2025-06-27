import './globals.css';
import type { ReactNode } from 'react';
import { SUIT_Variable } from 'next/font/google';

const suit = SUIT_Variable({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'BoxMind',
  description: '공간 기반 정리 보조 SaaS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={suit.className}>
      <body>{children}</body>
    </html>
  );
}
