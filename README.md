# BoxMind Frontend

This repository contains a minimal Next.js + TypeScript + Tailwind CSS frontend implementing a neumorphism design. Components use Framer Motion and GSAP for small animations and React Hook Form with Zod for validation.

## 📦 BoxMind Frontend – Backend Integration Guide

A Neumorphism-style Next.js + TypeScript frontend that manages physical storage spaces like refrigerators or vanities. This guide summarizes everything the backend engineer needs to know to build the API layer that connects with this frontend.

### 🧩 Folder Structure (Relevant to Backend)

- `src/app` – Route definitions using the Next.js App Router. Pages such as `/box/[id]` and `/reminders` will request data from the backend.
- `src/components` – UI components displaying boxes, items and reminders. They currently rely on placeholder arrays which should be replaced with API data.
- `src/lib` – Small utilities like animation settings.
- `src/styles` – Global Tailwind CSS styles.

## Development

Node modules are not included in this environment. After cloning, install dependencies and run the dev server:

```bash
npm install
npm run dev
```

The app uses the Next.js App Router with basic pages for Home, Box Detail, and Reminders.

## 🔗 API Contract Summary

### User Registration
- `POST /api/register`
  - Request: `{ email: string }`
  - Response: `{ userId: UUID }`

### Box Management
- `POST /api/box`
  - Request: `{ userId: UUID, name: string }`
  - Response: `{ boxId: UUID }`
- `GET /api/box/:userId`
  - Response: `[ { boxId: UUID, name: string } ]`

### Item Management
- `POST /api/item`
  - Request:
  ```ts
  {
    boxId: UUID;
    name: string;
    category: string;
    imageUrl?: string;
    barcode?: string;
    purchaseDate?: string;
    expiryDate?: string;
    lastUsedDate?: string;
  }
  ```
  - Response: `{ itemId: UUID }`
- `GET /api/item/:boxId`
  - Response: `[{ itemId, name, expiryDate, lastUsedDate }]`

### Insights
- `GET /api/insights/:userId`
  - Response:
  ```ts
  {
    topItems: [string];      // name + duration
    unusedItems: [string];   // name + lastUsedDate
  }
  ```

---

## 🧾 TypeScript Types Used in Frontend (Can be shared)

```ts
type Box = {
  id: string;
  userId: string;
  name: string;
  createdAt: string;
};

type Item = {
  id: string;
  boxId: string;
  name: string;
  category: string;
  imageUrl?: string;
  barcode?: string;
  purchaseDate?: string;
  expiryDate?: string;
  lastUsedDate?: string;
  createdAt: string;
};

type Reminder = {
  id: string;
  itemId: string;
  type: 'expiry' | 'reorg';
  notifiedAt: string;
};
```
