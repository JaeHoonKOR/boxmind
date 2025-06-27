// API stubs for backend integration
// Replace implementations with real fetch calls

export async function fetchBoxes(userId: string) {
  console.log("[API] fetchBoxes", { userId });
  return [] as { boxId: string; name: string; itemsCount?: number }[];
}

export async function createBox(userId: string, name: string) {
  console.log("[API] createBox", { userId, name });
  return { boxId: "temp" };
}

export async function fetchItems(boxId: string) {
  console.log("[API] fetchItems", { boxId });
  return [] as { id: string; name: string }[];
}

export async function createItem(
  boxId: string,
  data: { name: string; category: string; barcode?: string },
) {
  console.log("[API] createItem", { boxId, data });
  return { itemId: "temp" };
}

export async function fetchReminders(userId: string) {
  console.log("[API] fetchReminders", { userId });
  return [] as { type: "expiry" | "reorg"; message: string; color: string }[];
}
