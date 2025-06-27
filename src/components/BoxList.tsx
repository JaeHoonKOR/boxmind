"use client";
// Displays boxes for the current user
import { useEffect, useState, memo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { cardHover } from "@/lib/animations";
import { fetchBoxes } from "@/lib/api";

interface Box {
  boxId: string;
  name: string;
  itemsCount?: number;
}

function BoxList() {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchBoxes("user").then(setBoxes);
  }, []);

  const selectBox = (box: Box) => {
    console.log("[BoxList] select box", { box });
    router.push(`/box/${encodeURIComponent(box.name)}`);
  };

  return (
    <section aria-label="정리 공간 목록">
      <ul className="grid md:grid-cols-2 gap-6">
        {boxes.map((box) => (
          <li key={box.boxId}>
            <motion.div {...cardHover} style={{ willChange: "transform" }}>
              <Card
                className="p-4 flex justify-between cursor-pointer"
                onClick={() => selectBox(box)}
              >
                <span>{box.name}</span>
                <span aria-label="items-count">{box.itemsCount ?? 0}개</span>
              </Card>
            </motion.div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default memo(BoxList);
