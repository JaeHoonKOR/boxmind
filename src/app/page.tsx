import BoxList from '@/components/BoxList';
import Insights from '@/components/Insights';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="p-4 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">내 정리 공간</h1>
        <Button onClick={() => console.log('Create box')}>새 공간 만들기</Button>
      </header>
      <BoxList />
      <Insights />
    </main>
  );
}
