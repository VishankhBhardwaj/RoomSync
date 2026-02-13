# 🏠 RoomSync – Modern Roommate Finder Platform

RoomSync is a modern roommate-finding platform built using the **MERN stack**. It provides user authentication, profile management, preferences tracking, and subscription handling—presented with a sleek, app-like UI.

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

**RoomSync** is a modern roommate-finding platform built with the MERN stack. It provides user authentication, profile management, subscription handling, and a foundation for roommate matching features.

The application is:
- **Secure** – JWT-based authentication with email verification
- **User-Centric** – Clean, mobile-responsive dark-themed interface
- **Feature-Rich** – Profile management, preferences, photo uploads, and settings
- **Modern** – Left navigation, contemporary design with smooth animations

---

## ✨ Features

- 🔒 **Authentication** – Secure login/signup using JWT with email verification.
- 👤 **User Profiles** – Manage personal information, preferences, and bio.
- � **Subscription Management** – Stripe integration for premium features.
- � **Email Notifications** – Weekly marketing emails via Nodemailer.
- 🤖 **AI Chatbot** – Smart assistant to help users navigate the platform.
- 📸 **Photo Upload** – Cloudinary integration for user photos.
- ⚙️ **User Settings** – Marketing preferences and account management.
- 📱 **Responsive UI** – Modern dark theme with mobile support.
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

```
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
## 🔐 Authentication & Security
- JWT-based authentication with 7-day token expiration
- Bcrypt password hashing
- Email verification via OTP (Nodemailer)
- Protected routes with middleware

## 💳 Payment Integration
- Stripe subscription management
- Checkout session handling
- Invoice tracking and storage
- Payment history retrieval

## � Email System
- Automated weekly marketing emails (node-cron)
- OTP verification emails
- Marketing opt-in/opt-out preferences

## 🎨 UI/UX Design
- Design Language: Modern dark theme with gradient accents
- Fonts: System fonts optimized for readability
- Layout: Left vertical nav bar with collapsible sidebar
- Effects: Smooth transitions, hover states, animations
- Responsive: Fully optimized for mobile/tablet/desktop

🚀 Deployment
Frontend: Vercel

Backend: Render / Railway

Database: MongoDB Atlas

Sockets: Deploy in same Node app or on separate Socket.IO instance

## 🛣 Roadmap

### Core Features (In Progress)
- [ ] **AI-Based Matching System** – Implement OpenAI integration for personality-based matching
- [ ] **Personality Quiz** – Complete quiz interface and scoring logic
- [ ] **Real-Time Chat** – Socket.IO implementation for messaging
- [ ] **Roommate Matching Algorithm** – Compatibility scoring and filtering

### Enhancements
- [ ] OAuth login (Google/GitHub)
- [ ] Email notifications for new matches
- [ ] Block/report user functionality
- [ ] Photo gallery frontend implementation
- [ ] Phone verification (Twilio integration)
- [ ] User avatars and bio enhancements
- [ ] Admin panel
- [ ] Match scoring improvements using ML

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.
