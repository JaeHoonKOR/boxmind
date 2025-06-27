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
