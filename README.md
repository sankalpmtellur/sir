# 🏆 SIR - Sports In Rishihood | University Sports Management System

**SIR** is a high-performance, command-center style web application designed for Rishihood University to automate sports equipment inventory and facility access. It bridges the gap between physical hardware (RFID scanners) and digital management through a premium, "Operating System" inspired interface.

---

## 🚀 Overview

Managing sports equipment in a university environment often suffers from manual logbook errors and poor tracking. **SIR** provides a sleek, automated solution for sports assistants to issue and return equipment instantly, while giving administrators total control over the university's assets.

### Key Modules:
* **Assistant Terminal:** High-speed interface for real-time equipment issuing and student validation.
* **Admin Command Center:** A bird's-eye view of inventory health, system vitals, and usage analytics.
* **Live Telemetry:** Real-time tracking of "Items Out," "Active Entries," and hardware node status.

---

## ✨ Core Features

### 🖥️ Smart Terminal (Assistant View)
* **Card Reader Integration:** Simulated hardware handshake for instant student identification.
* **Interactive Gear Selection:** Visual grid of equipment with live "In Stock" indicators and high-contrast icons.
* **Precision Issuing:** Smart quantity selectors with safety caps based on live stock levels.
* **Live Activity Logs:** A scrollable, real-time sidebar tracking every issue and return event as it happens.

### 📊 Admin Console
* **Inventory Monitor:** Visual stock telemetry with "Healthy," "Low," and "Out of Stock" status tagging.
* **System Vitals:** Executive dashboard showing utilization percentages and peak facility load.
* **Node Connectivity:** Monitoring tool to ensure hardware RFID readers and admin terminals are online.
* **Secure Gateway:** Protected Admin Login with encrypted session simulation.

---

## 🛠️ Tech Stack

* **Framework:** [React.js](https://reactjs.org/) (Vite)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Design:** Modern Glassmorphism & Command Center UI
* **State Management:** React Functional Hooks

---

## 📂 Project Structure

```
src/
├── assets/                    # Brand logos (icon.webp, logo.webp)
├── components/                # Reusable UI (Sidebar, StatCards, Tables, NavItem)
├── pages/
│   ├── user/
│     ├── Login/               # User Logs in, to control the inventory
│     ├── Dashboard/           # Dashboard for user, to issue the equipments
│   ├── admin/
│     ├── AdminLogin/          # Secure Admin Authentication Gateway
│     ├── AdminDashboard/      # Admin Executive Overview & Inventory Monitor
└── App.jsx                    # System Routing & Core Logic
```

---

👤 Credits

**<a href="https://github.com/Rishiwant1729">Rishiwant</a>** - Lead Developer & System Architect