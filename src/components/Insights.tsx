'use client';
import { Card } from './ui/Card';

export default function Insights() {
  return (
    <section className="space-y-4" aria-labelledby="insights-title">
      <h2 id="insights-title" className="text-xl font-semibold">오래된 보관품 Top5</h2>
      <Card className="p-4">차트 자리</Card>
      <h3 className="text-lg font-medium">1년 넘게 안쓴 물건들</h3>
      <Card className="p-4 flex justify-between">
        <span>물건명</span>
        <button
          role="button"
          className="underline"
          onClick={() => console.log('정리 제안 클릭')}
        >
          정리 제안
        </button>
      </Card>
    </section>
  );
}
