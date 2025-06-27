'use client';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';

const items = Array.from({ length: 8 }, (_, i) => ({ id: i, name: `물건 ${i+1}` }));

export default function ItemGrid() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4" aria-label="물건 목록">
      {items.map(item => (
        <motion.div key={item.id} whileHover={{ y: -4 }}>
          <Card className="h-44 flex items-center justify-center">
            {item.name}
          </Card>
        </motion.div>
      ))}
    </section>
  );
}
