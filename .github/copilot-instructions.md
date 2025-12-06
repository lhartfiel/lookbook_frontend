## Frontend instructions for AI coding agents

Focus: the Next.js frontend at `lookbook-frontend/` (TypeScript, App Router, Tailwind, Turbopack). Keep edits small and front-end scoped unless the change explicitly requires backend work.

Key frontend facts

- App root: `lookbook-frontend/src/app/` (App Router). Primary components: `components/`, `apis/`, `state/`.
- State + data: Zustand store in `src/app/state/store.ts`; network calls use `src/app/apis/fetch_styles.tsx` with `@tanstack/react-query` in UI components (e.g., `Chatbot.tsx`).
- Env: `NEXT_PUBLIC_API_URL` is the frontend's API base. `fetch_styles.tsx` appends `styles/search/` and expects JSON keys: `count`, `results`, `ai_response`, `next`, `previous`.

Files to inspect when changing UI or network behavior

- `src/app/components/Chatbot.tsx` — mutation pattern, input validation, and updates to Zustand (`updateResults`, `updateAiResponse`).
- `src/app/apis/fetch_styles.tsx` — builds request URL (logs present), handles errors, returns expected JSON shape.
- `src/app/state/store.ts` — store shape (aiResponse, results, favorites, theme, etc.). Prefer using store setters for cross-component updates.

Run & debug (frontend only)

```bash
cd lookbook-frontend
npm install
NEXT_PUBLIC_API_URL=http://localhost:8000/api/ npm run dev
```

- Dev server: http://localhost:3000. Console.log is used in `fetch_styles.tsx` for troubleshooting request URLs and responses.

Conventions & gotchas (frontend-specific)

- Use the Zustand store for app-wide state; avoid adding new global state unless it follows `store.ts` patterns.
- Keep the API contract stable: changing keys like `ai_response` requires updating `fetch_styles.tsx` and consumers such as `Chatbot.tsx` and `StyleTextResponse.tsx`.
- UI network layer: prefer `@tanstack/react-query` patterns already present in components for caching and mutation handling.
- Styling: Tailwind + local component classes. Follow existing class naming and responsive breakpoints.

Quick edit examples

- To add a new UI field that shows the AI response: update `StyleTextResponse.tsx` and ensure `useStyleStore` exposes the value.
- To change the request path or add query params: edit `fetch_styles.tsx` (it centralizes baseUrl logic). Keep console logs for quick debugging.

Testing & verification

- Manual: run the dev server and exercise `Chatbot` (enter a query, inspect network tab, verify `results` and `ai_response` rendering).
- Lint/Types: ensure TypeScript types stay consistent; the project uses TypeScript strictness—run `npm run build` if unsure.

If a change must touch the backend

- Document the API change in the PR and update `fetch_styles.tsx`/Chatbot consumers. Avoid backend changes in a frontend-only PR unless approved.
