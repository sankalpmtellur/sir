# 🏆 SportsOS | University Sports Management System

**SportsOS** is a high-performance, command-center style web application designed for Rishihood University to automate sports equipment inventory and facility access. It bridges the gap between physical hardware (RFID scanners) and digital management through a premium, "Operating System" inspired interface.

---

## 🚀 Overview

Managing sports equipment in a university environment often suffers from manual logbook errors and poor tracking. **SportsOS** provides a sleek, automated solution for sports assistants to issue and return equipment instantly, while giving administrators total control over the university's assets.

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

```text
src/
├── assets/             # Brand logos (icon.webp, logo.webp)
├── components/         # Reusable UI (Sidebar, StatCards, Tables, NavItem)
├── pages/
│   ├── Terminal.jsx    # Assistant Interface (Left & Right Sections)
│   ├── AdminLogin.jsx  # Secure Admin Authentication Gateway
│   └── AdminDash.jsx   # Admin Executive Overview & Inventory Monitor
└── App.jsx             # System Routing & Core Logic

Here is the raw Markdown code for your README.md. You can copy this entire block and paste it directly into your file.

Markdown

# 🏆 SportsOS | University Sports Management System

**SportsOS** is a high-performance, command-center style web application designed for Rishihood University to automate sports equipment inventory and facility access. It bridges the gap between physical hardware (RFID scanners) and digital management through a premium, "Operating System" inspired interface.

---

## 🚀 Overview

Managing sports equipment in a university environment often suffers from manual logbook errors and poor tracking. **SportsOS** provides a sleek, automated solution for sports assistants to issue and return equipment instantly, while giving administrators total control over the university's assets.

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

```text
src/
├── assets/             # Brand logos (icon.webp, logo.webp)
├── components/         # Reusable UI (Sidebar, StatCards, Tables, NavItem)
├── pages/
│   ├── Terminal.jsx    # Assistant Interface (Left & Right Sections)
│   ├── AdminLogin.jsx  # Secure Admin Authentication Gateway
│   └── AdminDash.jsx   # Admin Executive Overview & Inventory Monitor
└── App.jsx             # System Routing & Core Logic
⚙️ Installation & Setup
Clone the Repository:

Bash

git clone [https://github.com/yourusername/sports-os.git](https://github.com/yourusername/sports-os.git)
Install Dependencies:

Bash

npm install
Launch Development Server:

Bash

npm run dev
Production Build:

Bash

npm run build
💡 Roadmap
[ ] Physical RFID Integration: Connecting RC522 modules via Web Serial API.

[ ] Automated Fine System: Calculating penalties for overdue or damaged gear.

[ ] Student Dashboard: Personal portal for students to see their borrowing history.

[ ] Multi-Facility Support: Managing different sports complexes from one OS.