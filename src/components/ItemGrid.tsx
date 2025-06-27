'use client';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { cardHover } from '@/lib/animations';

const items = Array.from({ length: 8 }, (_, i) => ({ id: i, name: `물건 ${i+1}` }));

export default function ItemGrid() {
  return (
    <section aria-label="물건 목록">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <motion.div {...cardHover} style={{ willChange: 'transform' }}>
              <Card className="h-44 flex items-center justify-center">
                {item.name}
              </Card>
            </motion.div>
          </li>
        ))}
      </ul>
    </section>
  );
}
