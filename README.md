# BoxMind Frontend

This repository contains a minimal Next.js + TypeScript + Tailwind CSS frontend implementing a neumorphism design. Components use Framer Motion and GSAP for small animations and React Hook Form with Zod for validation.

## 📦 BoxMind Frontend – Backend Integration Guide

This section summarizes how backend developers should interact with the Next.js frontend.

### 🧩 Folder Structure (Relevant to Backend)

- `src/app` – Next.js pages that request data from the backend (`/box/[id]`, `/reminders`, etc.).
- `src/components` – UI and form components. `AddBox.tsx` and `AddItem.tsx` contain Zod schemas.
- `src/lib` – Utility helpers such as animation settings.
- `src/styles` – Global Tailwind CSS styles.

### 🔗 API Contract Summary

#### User Registration
- `POST /api/register`
  - Request: `{ email: string }`
  - Response: `{ userId: UUID }`

#### Box Management
- `POST /api/box`
  - Request: `{ userId: UUID; name: string }`
  - Response: `{ boxId: UUID }`
- `GET /api/box/:userId`
  - Response: `[ { boxId: UUID; name: string } ]`

#### Item Management
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

#### Insights
- `GET /api/insights/:userId`
  - Response:
    ```ts
    {
      topItems: string[];      // name + duration
      unusedItems: string[];   // name + lastUsedDate
    }
    ```

### 🧾 Shared TypeScript Types

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

### ✔️ Zod Validation Schemas

```ts
// src/components/AddBox.tsx
const schema = z.object({
  name: z.string().min(1)
});

// src/components/AddItem.tsx
const schema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  barcode: z.string().optional(),
  photo: z.any().optional()
});
```

### 🗒️ Notes for Backend Developers

- Primary keys are UUID strings.
- Dates are formatted as `YYYY-MM-DD`.
- Free tier allows up to **2 boxes** and **50 items**.
- APIs should power insight generation and reminder notifications.
- Future plan: AI-based image recognition for uploaded item photos.

## Development

Node modules are not included in this environment. After cloning, install dependencies and run the dev server:

```bash
npm install
npm run dev
```

The app uses the Next.js App Router with basic pages for Home, Box Detail, and Reminders.
