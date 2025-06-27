import { Card } from '@/components/ui/Card';

export default function ReminderPage() {
  const reminders = [
    { type: 'expiry', message: '우유 유통기한 임박', color: 'bg-[#FFC107]' },
    { type: 'reorg', message: '청소기 30일 미사용', color: 'bg-[#FF5252]' },
  ];

  return (
    <main className="p-4 space-y-4" aria-label="알림 목록">
      {reminders.map((r, i) => (
        <Card key={i} className={`p-4 ${r.color}`}>{r.message}</Card>
      ))}
    </main>
  );
}
