# 🏠 RoomSync – Smart Roommate Finder (MERN Stack)

RoomSync is a modern roommate matching platform built using the **MERN stack**, featuring lifestyle-based filtering, chat UI, and a clean app-like design.  
AI-powered matching and premium Stripe features are **planned** and partially scaffolded.

---

## 📑 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [AI Matching Logic (Planned)](#ai-matching-logic-planned)
- [Chat UI](#chat-ui)
- [UI/UX Design](#uiux-design)
- [Stripe Integration (Demo)](#stripe-integration-demo)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [License](#license)

---

## 🧠 Overview

**RoomSync** helps users find compatible roommates through lifestyle filters, profile insights, and a clean, responsive UI.

AI matching and real-time messaging are **planned features**, with backend structure already prepared for future upgrades.

Key ideas:
- **Scalable backend**
- **Clean UI**
- **Chat interface (frontend only)**
- **Stripe demo integration**

---

## ✨ Features

### ✔ Implemented
- 🔒 JWT Authentication  
- 🎯 Roommate Filters (budget, location, habits)  
- 🧑‍🤝‍🧑 User Profiles  
- 💬 Chat UI (Frontend Only)  
- 📱 Responsive UI  
- 💳 Stripe Checkout (Demo Only)

### ✔ Planned
- 🧠 AI-based matching (OpenAI)  
- ⚡ Real-time chat with Socket.IO  
- ⭐ Premium features post-payment  

---

## 💻 Tech Stack

### **Frontend**
- React (Vite)
- Tailwind CSS
- React Router
- Axios
- Zustand / Context API

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- Stripe (demo)  
- OpenAI API (for future AI matching)

---

## 🗂 Project Structure

RoomSync/
│
├── client/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── layouts/
│ │ ├── store/
│ │ └── App.jsx
│ └── public/
│
├── server/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
├── .env
├── README.md
├── package.json
---

## ⚙️ Setup and Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/RoomSync.git
cd RoomSync
2️⃣ Install Dependencies
Frontend
cd client
npm install

Backend
cd ../server
npm install

3️⃣ Environment Variables

Create .env inside server:

PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret

# For future AI logic
OPENAI_API_KEY=your_openai_key

# Stripe demo
STRIPE_SECRET_KEY=your_stripe_key

CLIENT_URL=http://localhost:3000

4️⃣ Run the App

Start backend:

npm run dev


Start frontend:

cd ../client
npm run dev

🤖 AI Matching Logic (Planned)

Personality & lifestyle quiz UI created

Backend routes structured

OpenAI setup added

Actual matching algorithm not implemented yet

Planned outputs:

Compatibility score

Ranked suggestions

AI explanation

💬 Chat UI

The chat interface includes:

Message bubbles

Conversation list

Responsive layout

⚠️ Note:
Chat does NOT include Socket.IO or backend yet.
This is a frontend-only UI.🎨 UI/UX Design

Soft neumorphism + flat hybrid UI

Left-side navigation bar

Clean transitions and responsiveness

Fonts: Inter / Poppins

💳 Stripe Integration (Demo)

Stripe Checkout is integrated only for showcasing payment flow:

Test payment works

No premium features unlock yet

Backend is ready for future expansion.

🚀 Deployment

Frontend → Vercel

Backend → Render / Railway

Database → MongoDB Atlas

🛣 Roadmap

Google/GitHub OAuth

Full AI matching system

Real chat backend (Socket.IO)

Premium features after payment

Email notifications

User avatars

Admin panel

📄 License

MIT License. See the LICENSE file for details.
