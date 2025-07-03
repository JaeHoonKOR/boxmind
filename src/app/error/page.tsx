'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import Head from 'next/head';
import { Button } from '@/components/ui/Button';

export default function ErrorPage() {
  const router = useRouter();
  const params = useSearchParams();
  const message = params.get('message') || '알 수 없는 오류가 발생했습니다.';

  return (
    <>
      <Head>
        <title>Error - BoxMind</title>
      </Head>
      <main className="p-8 space-y-4 text-center" aria-label="오류 페이지">
        <h1 className="text-2xl font-bold">오류 발생</h1>
        <p>{decodeURIComponent(message)}</p>
        <Button onClick={() => router.back()} className="mx-auto">이전 페이지</Button>
      </main>
    </>
  );
}
