'use client';
import Head from 'next/head';
import { Card } from '@/components/ui/Card';

export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>Settings - BoxMind</title>
      </Head>
      <main className="p-8 space-y-4" aria-label="설정">
        <h1 className="text-2xl font-bold">설정</h1>
        <Card className="p-4">설정 화면 준비 중</Card>
      </main>
    </>
  );
}
