'use client';
import { useParams } from 'next/navigation';
import ItemGrid from '@/components/ItemGrid';
import AddItem from '@/components/AddItem';
import Head from 'next/head';

export default function BoxDetail() {
  const params = useParams();
  const boxName = decodeURIComponent(String(params.id || ''));
  console.log('[BoxDetail] Loaded', { boxName });

  return (
    <>
      <Head>
        <title>{boxName} - BoxMind</title>
      </Head>
      <main className="p-4 space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{boxName}</h1>
          <AddItem />
        </header>
        <p className="text-sm text-gray-600">마우스로 물건 위치를 조정할 수 있어요</p>
        <ItemGrid />
      </main>
    </>
  );
}
