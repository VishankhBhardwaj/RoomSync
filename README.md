# RoomSync
# 🏠 RoomSync – AI-Powered Roommate Finder

RoomSync is a smart, AI-based roommate matching platform built using the **MERN stack**. It helps users find ideal roommates through intelligent matching based on personality, preferences, lifestyle, and real-time communication—presented with a modern, app-like UI.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Configure Environment Variables](#3-configure-environment-variables)
  - [4. Run the App Locally](#4-run-the-app-locally)
- [AI Matching Logic](#ai-matching-logic)
- [Real-Time Chat](#real-time-chat)
- [UI/UX Design](#uiux-design)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [License](#license)

---

## 🧠 Overview

**RoomSync** leverages AI to recommend compatible roommates based on quiz answers, preferences, and behavior. It integrates real-time chat, personalized filtering, and a sleek design for a seamless experience.

The application is:
- **Intelligent** – AI-backed roommate suggestions
- **User-Centric** – Clean, mobile-responsive interface
- **Functional** – Real-time chat, filtering, quiz-based compatibility
- **Modern** – Left navigation, neumorphic design elements

---

## ✨ Features

- 🧠 **AI-Based Matching** – Match users with similar interests, lifestyles, and habits.
- 💬 **Real-Time Chat** – Integrated Socket.IO chat system for direct communication.
- 📊 **Personality Quiz** – Tailored roommate suggestions using personality insights.
- 🎯 **Advanced Filters** – Budget, location, cleanliness, and lifestyle filters.
- 🔒 **Authentication** – Secure login/signup using JWT.
- 📱 **Responsive UI** – Neumorphic/flat design with mobile support.
- 📌 **Modern Navigation** – Vertical left-side nav bar for an app-like experience.

---

## 💻 Tech Stack

### Frontend:
- React.js (Vite)
- Tailwind CSS
- React Router
- Axios
- Zustand or Context API
- Socket.IO Client

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- OpenAI API
- Socket.IO Server

---

## 🗂 Project Structure

RoomSync/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── layouts/
│ │ ├── store/
│ │ └── App.jsx
│ └── public/
│
├── server/ # Node/Express Backend
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── sockets/
│ └── server.js
│
├── .env
├── README.md
├── package.json

---

## ⚙️ Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/RoomSync.git
cd RoomSync
# Install frontend packages
cd client
npm install

# Install backend packages
cd ../server
npm install
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
CLIENT_URL=http://localhost:3000
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev
🤖 AI Matching Logic
User fills out a personality & lifestyle quiz

Quiz responses + bio/interests analyzed using OpenAI API

Similarity scoring algorithm matches users with potential roommates

🔌 Real-Time Chat
Powered by Socket.IO

Typing indicators, real-time messaging, online/offline status

Integrated inside user dashboard

🎨 UI/UX Design
Design Language: Soft neumorphism & flat UI mix

Fonts: Inter, Poppins, or Roboto

Layout: Left vertical nav bar (not typical top nav)

Effects: Smooth transitions, subtle shadows, hover states

Responsive: Fully optimized for mobile/tablet/desktop

🚀 Deployment
Frontend: Vercel

Backend: Render / Railway

Database: MongoDB Atlas

Sockets: Deploy in same Node app or on separate Socket.IO instance

🛣 Roadmap
 OAuth login (Google/GitHub)

 Email notifications for new matches

 Block/report user functionality

 Match scoring improvements using ML

 User avatars and bio enhancements

 Admin panel

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.
