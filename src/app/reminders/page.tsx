import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import Head from "next/head";
import { fetchReminders } from "@/lib/api";

interface Reminder {
  type: "expiry" | "reorg";
  message: string;
  color: string;
}

export default function ReminderPage() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    console.log("[Reminders] page mounted");
    fetchReminders("user").then(setReminders);
  }, []);

  return (
    <>
      <Head>
        <title>BoxMind 알림</title>
      </Head>
      <main className="p-4 space-y-4" aria-label="알림 목록">
        {reminders.map((r, i) => (
          <Card key={i} className={`p-4 ${r.color}`}>
            {r.message}
          </Card>
        ))}
      </main>
    </>
  );
}
