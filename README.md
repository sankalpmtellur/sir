# SIR — Sports In Rishihood

A dual-portal web app for Rishihood University’s athletics operations. SIR unifies staff equipment circulation with admin-level analytics and facility oversight in a single, high‑fidelity interface.

## What This Project Is

SIR (Sports In Rishihood) is a front‑end prototype that models day‑to‑day sports operations at a university campus. It focuses on two key audiences.

- Staff Portal for on‑ground teams who issue equipment, track inventory, and manage active student loans.
- Admin Console for leadership to visualize usage trends and manage facility‑level insights.

The project intentionally ships as a UI‑first experience with mock data and local state. It is built to communicate product direction, information architecture, and interaction design before backend integration.

## Product Flow (End‑to‑End)

1. **Launch Hub (`/`)**: entry point that splits the experience into Staff vs Admin interfaces and provides a quick navigation link to the in‑app README screen (`/readme`).
2. **Staff Portal**: login UI (`/user/login`), RFID‑style scan + issue flow (`/user/dashboard`), inventory master with add/restock/deduct/delete (`/user/inventory`), and active issues tracker (`/user/students`).
3. **Admin Console**: login UI (`/admin/login`), KPI + usage analytics (`/admin/dashboard`), sport‑wise inventory view (`/admin/sportsroom`), and placeholders for gym and pool dashboards (`/admin/gym`, `/admin/pool`).
4. **In‑App README (`/readme`)**: branded narrative screen that summarizes mission, dual‑interface design, and vision.

## Interfaces (Both Portals)

### 1) Staff Portal

Built for fast, operational workflows:

- RFID scan simulation to fetch student profile data.
- Equipment issuance with stock limits and instant decrements.
- Inventory master list with add/reduce stock actions.
- Pagination for larger asset tables.
- Active issues tracker for students and issued equipment.

### 2) Admin Console

Built for strategic monitoring and planning:

- KPI cards summarizing usage and equipment totals.
- Bar chart analytics using weekly/monthly data sets.
- Sports room dashboard with per‑sport breakdowns and trend labels.
- Dedicated navigation paths for gym and pool expansion.

## Tech Stack

- React 19 for component architecture and UI state.
- Vite 7 for fast dev server and build pipeline.
- React Router 7 for routing between Staff/Admin portals.
- Tailwind CSS 4 via `@tailwindcss/vite` for styling.
- Framer Motion for transitions and UI animation polish.
- Lucide React for iconography.
- Recharts for admin analytics visualization.

## Project Structure

```
src/
  Admin/
    components/
    pages/
  User/
    components/
    pages/
  assets/
  App.jsx
  Launch.jsx
  Readme.jsx
  index.css
  main.jsx
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Notes & Current State

- This is a front‑end only prototype; logins and data are mocked in local component state.
- Gym and Pool pages are placeholders meant for future dashboards.
- The design language intentionally differentiates Staff (orange) vs Admin (red) for clarity.
- The in‑app README page provides a branded product narrative and should be kept in sync with this file.

## Next Steps (Suggested)

- Connect to a real backend for auth and inventory persistence.
- Replace mock data with API‑driven datasets.
- Build out gym and pool analytics dashboards.
- Add role‑based access controls and audit logs.

---

Built as the Sports In Rishihood (SIR) experience for Rishihood University athletics.
