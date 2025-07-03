'use client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const loggedIn = typeof window !== 'undefined' && localStorage.getItem('loggedIn') === 'true';
    if (loggedIn) {
      router.replace('/dashboard');
    }
  }, [router]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll('.reveal'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: { trigger: el, start: 'top center' },
      },
    );
  }, []);

  const start = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('loggedIn', 'true');
    }
    router.push('/dashboard');
  };

  return (
    <>
      <Head>
        <title>BoxMind</title>
      </Head>
      <main className="p-8 space-y-16 text-center">
        <section className="space-y-6" ref={heroRef}>
          <h1 className="text-3xl font-bold reveal">BoxMind – Your Digital Declutter Assistant</h1>
          <p className="text-lg reveal">박스 기반 정리, 알림, AI 분류로 깔끔한 생활을 누리세요.</p>
          <div className="flex justify-center">
            <Card className="w-60 h-40 flex items-center justify-center reveal">스크린샷</Card>
          </div>
          <Button onClick={start} className="mx-auto">Get Started</Button>
        </section>
        <section className="grid md:grid-cols-3 gap-6">
          <Card className="p-4 space-y-2">
            <h3 className="font-semibold">Box-Based Organization</h3>
            <p className="text-sm">공간별로 물건을 손쉽게 관리합니다.</p>
          </Card>
          <Card className="p-4 space-y-2">
            <h3 className="font-semibold">Smart Reminders</h3>
            <p className="text-sm">만료일과 정리 시점을 알려드려요.</p>
          </Card>
          <Card className="p-4 space-y-2">
            <h3 className="font-semibold">AI Classification</h3>
            <p className="text-sm">사진만 찍으면 자동으로 분류됩니다.</p>
          </Card>
        </section>
      </main>
    </>
  );
}
