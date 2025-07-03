'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BoxList from '@/components/BoxList';
import Insights from '@/components/Insights';
import AddBox from '@/components/AddBox';
import Head from 'next/head';

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    const loggedIn = typeof window !== 'undefined' && localStorage.getItem('loggedIn') === 'true';
    if (!loggedIn) {
      router.replace('/');
    }
    console.log('[Dashboard] page loaded');
  }, [router]);

  return (
    <>
      <Head>
        <title>BoxMind 대시보드</title>
      </Head>
      <main className="p-4 space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">내 정리 공간</h1>
          <AddBox />
        </header>
        <BoxList />
        <Insights />
      </main>
    </>
  );
}
