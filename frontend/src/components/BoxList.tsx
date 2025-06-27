'use client';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';

const boxes = [
  { name: '냉장고', itemsCount: 12 },
  { name: '화장대', itemsCount: 7 }
];

export default function BoxList() {
  return (
    <section aria-label="정리 공간 목록" className="grid md:grid-cols-2 gap-6">
      {boxes.map((box) => (
        <motion.div key={box.name} whileHover={{ scale: 1.02 }}>
          <Card className="p-4 flex justify-between">
            <span>{box.name}</span>
            <span aria-label="items-count">{box.itemsCount}개</span>
          </Card>
        </motion.div>
      ))}
    </section>
  );
}
