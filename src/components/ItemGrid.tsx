"use client";
// Grid of items inside a box
import { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { cardHover } from "@/lib/animations";
import { fetchItems } from "@/lib/api";

interface Item {
  id: string;
  name: string;
}

function ItemGrid() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems("box").then(setItems);
  }, []);

  return (
    <section aria-label="물건 목록">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <motion.div {...cardHover} style={{ willChange: "transform" }}>
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

export default memo(ItemGrid);
