# 🏠 RoomSync – AI-Powered Roommate Finder

RoomSync is a modern, full-stack roommate matching platform built with the **MERN stack**. It helps users find compatible roommates through intelligent matching based on preferences, lifestyle, and personality traits—all wrapped in a beautiful, responsive UI with advanced animations.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Setup and Installation](#-setup-and-installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Environment Variables](#environment-variables)
- [Key Features Deep Dive](#-key-features-deep-dive)
- [API Routes](#-api-routes)
- [Database Models](#-database-models)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [License](#-license)

---

## 🧠 Overview

**RoomSync** is a comprehensive roommate-finding platform that combines:
- **Smart Matching** – AI-powered chatbot assistance and preference-based matching
- **Secure Authentication** – JWT-based auth with email OTP verification
- **Premium Features** – Stripe subscription integration for enhanced features
- **Rich Media** – Cloudinary-powered photo uploads for user profiles
- **Engagement** – Automated weekly email campaigns for opted-in users
- **Modern UX** – Stunning animations using Framer Motion, GSAP, and Three.js

---

## ✨ Features

### Core Functionality
- 🔐 **Secure Authentication** – JWT-based login/signup with bcrypt password hashing
- ✉️ **Email Verification** – OTP-based email verification using Nodemailer
- 👤 **User Profiles** – Comprehensive profiles with bio, occupation, date of birth, and phone number
- 📸 **Photo Uploads** – Multi-photo support via Cloudinary integration
- 🎯 **Preference Matching** – Filter by budget, location, move-in date, cleanliness level, social level, lifestyle traits, and hobbies
- 💬 **AI Chatbot** – Smart assistant powered by OpenRouter AI (GPT-3.5-turbo) to help users navigate the platform
- 💳 **Subscription System** – Stripe integration for premium subscriptions with invoice management
- 📧 **Marketing Emails** – Weekly automated emails (every Monday at 10 AM) for users who opt-in
- ⚙️ **User Settings** – Marketing preferences and account settings management

### User Experience
- 🎨 **Modern UI** – Built with Tailwind CSS and custom animations
- 🎭 **Rich Animations** – Framer Motion, GSAP, and Animate.css for smooth interactions
- 🌐 **3D Graphics** – Three.js and OGL for immersive visual elements
- 📱 **Fully Responsive** – Optimized for desktop, tablet, and mobile
- 🌍 **Internationalization** – i18next integration for multi-language support
- 🎯 **Interactive Components** – React Icons, Lucide React, and custom components

---

## 💻 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework |
| **Vite** | Build tool and dev server |
| **Tailwind CSS** | Utility-first styling |
| **React Router DOM** | Client-side routing |
| **Axios** | HTTP client |
| **Framer Motion** | Advanced animations |
| **GSAP** | Timeline-based animations |
| **Three.js** | 3D graphics |
| **Socket.IO Client** | Real-time communication |
| **Stripe.js** | Payment processing |
| **React Toastify** | Toast notifications |
| **React DatePicker** | Date selection |
| **i18next** | Internationalization |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js 5** | Web framework |
| **MongoDB + Mongoose** | Database and ODM |
| **JWT** | Authentication tokens |
| **bcrypt** | Password hashing |
| **Nodemailer** | Email service |
| **Cloudinary** | Image hosting |
| **Multer** | File upload handling |
| **Stripe** | Payment processing |
| **Socket.IO** | Real-time features |
| **OpenAI (via OpenRouter)** | AI chatbot |
| **node-cron** | Scheduled tasks |
| **Twilio** | SMS/phone verification (prepared) |

---

## 🗂 Project Structure

```
RoomSync/
│
├── Backend/
│   ├── Controllers/
│   │   ├── AuthController.js           # Registration, login, email OTP
│   │   ├── UserInfoController.js       # User data, Stripe payments
│   │   ├── UserPhotosController.js     # Cloudinary photo uploads
│   │   └── UserPreferencesController.js # Roommate preferences
│   │
│   ├── models/
│   │   ├── User.js                     # User authentication
│   │   ├── UserInfo.js                 # Extended user info
│   │   ├── UserPreferences.js          # Matching preferences
│   │   ├── UserPhotos.js               # Photo storage
│   │   ├── UserPayment.js              # Stripe subscriptions
│   │   ├── UserSettings.js             # User settings
│   │   └── UserVerification.js         # Verification data
│   │
│   ├── routes/
│   │   ├── Login.js                    # Auth routes
│   │   ├── Auth.js                     # Email verification
│   │   ├── UserInfo.js                 # User data & payments
│   │   ├── Profile.js                  # Preferences & photos
│   │   └── Chatbot.js                  # AI assistant
│   │
│   ├── Nodemailer/
│   │   ├── index.js                    # Email utilities
│   │   └── weeklyMailer.js             # Cron job for weekly emails
│   │
│   ├── Cloudinary/
│   │   └── index.js                    # Cloudinary config
│   │
│   ├── db/
│   │   └── config.js                   # MongoDB connection
│   │
│   ├── middlewares/
│   │   └── auth.js                     # JWT verification
│   │
│   ├── app.js                          # Express app setup
│   └── package.json
│
├── Frontend/RoomSync/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home/                   # Landing page
│   │   │   ├── Signin/                 # Login page
│   │   │   ├── Register/               # Registration
│   │   │   ├── Dashboard/              # User dashboard
│   │   │   ├── Matches/                # Browse matches
│   │   │   ├── Messages/               # Chat interface
│   │   │   ├── Profile/                # User profile
│   │   │   ├── Settings/               # Account settings
│   │   │   ├── PeronalityQuiz/         # Preference quiz
│   │   │   ├── RoomMateHub/            # Roommate discovery
│   │   │   └── Payment/                # Stripe success/cancel
│   │   │
│   │   ├── Components/
│   │   │   ├── Animations/             # Animation components
│   │   │   ├── Chatbot/                # AI chatbot UI
│   │   │   ├── MatchesComponents/      # Match cards
│   │   │   ├── MessagesComponents/     # Chat components
│   │   │   ├── ProfileComponents/      # Profile sections
│   │   │   └── SettingsComponent/      # Settings UI
│   │   │
│   │   ├── API/                        # API service layer
│   │   ├── App.jsx                     # Main app & routing
│   │   └── main.jsx                    # Entry point
│   │
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── LICENSE
└── README.md
```

---

## ⚙️ Setup and Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or MongoDB Atlas)
- **Stripe Account** (for payments)
- **Cloudinary Account** (for image uploads)
- **OpenRouter API Key** (for AI chatbot)
- **Email Service** (Gmail, SendGrid, etc. for Nodemailer)

### Backend Setup

1. **Navigate to Backend directory:**
   ```bash
   cd Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file** (see [Environment Variables](#environment-variables))

4. **Start the server:**
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:5000` (or your configured PORT)

### Frontend Setup

1. **Navigate to Frontend directory:**
   ```bash
   cd Frontend/RoomSync
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

### Environment Variables

Create a `.env` file in the `Backend/` directory:

```env
# Server
PORT=5000

# Database
MONGO_URI=mongodb://localhost:27017/roomsync
# Or MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/roomsync

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# OpenRouter AI
OPENROUTER_API_KEY=your_openrouter_api_key

# Nodemailer (Gmail example)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_specific_password

# Twilio (optional, for phone verification)
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_phone

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173
```

---

## 🔍 Key Features Deep Dive

### 1. Authentication System
- **Registration**: Creates user account with hashed password (bcrypt)
- **Login**: JWT token generation (7-day expiry)
- **Email OTP**: 6-digit OTP sent via Nodemailer for verification
- **Protected Routes**: JWT middleware validates tokens on protected endpoints

### 2. User Preferences & Matching
Users can set preferences for:
- **Budget Range**: Maximum rent budget
- **Preferred Location**: City/area preference
- **Move-in Date**: When they need to move
- **Cleanliness Level**: How clean they keep their space
- **Social Level**: Introvert vs. extrovert
- **Lifestyle Traits**: Smoking, pets, work schedule, etc.
- **Hobbies**: Interests and activities

### 3. AI Chatbot Assistant
- Powered by **OpenRouter** (GPT-3.5-turbo)
- Helps users understand the platform
- Answers questions about registration, matching, verification
- Available on all pages via floating chat widget

### 4. Stripe Subscription System
- **Checkout**: Creates Stripe checkout session
- **Success Handler**: Retrieves session details and saves subscription
- **Invoice Management**: Stores invoice history
- **Subscription Status**: Tracks active/inactive subscriptions

### 5. Photo Upload System
- **Cloudinary Integration**: Secure cloud storage
- **Multi-photo Support**: Users can upload multiple profile photos
- **Organized Storage**: Photos stored in `RoomSyncUserPhotos` folder
- **Efficient Retrieval**: Fast CDN delivery

### 6. Weekly Email Campaigns
- **Automated Scheduling**: Runs every Monday at 10:00 AM (node-cron)
- **Opt-in Based**: Only sends to users with `isMarketingOptedIn: true`
- **Rich HTML Emails**: Branded, professional email templates
- **Engagement Features**: Updates, tips, and platform news

---

## 🛣 API Routes

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/verifyemail` - Send email OTP
- `POST /api/userVerificationDataUpdate` - Update verification status

### User Information
- `GET /api/userData` - Get user data (protected)
- `POST /api/updateinfo` - Update user info (protected)
- `GET /api/payment` - Get payment info (protected)
- `POST /api/payment/checkout` - Create Stripe checkout session
- `POST /api/payment/session` - Get session details after payment

### Preferences & Photos
- `POST /api/updateUserPref` - Update user preferences (protected)
- `GET /api/Pref` - Get user preferences (protected)
- `POST /api/PhotosUploadedByUser` - Upload photos (protected)
- `GET /api/PhotosUploadedByUser` - Get user photos (protected)
- `GET /api/allData` - Get all user data (protected)

### Chatbot
- `POST /api/chat/chat` - Send message to AI assistant

### Settings
- `GET /api/settings/marketing` - Get marketing preferences (protected)
- `POST /api/settings/marketing` - Update marketing opt-in (protected)

---

## 🗄 Database Models

### User
- FirstName, LastName, Email, Password (hashed)

### UserInfo
- PhoneNumber, DateOfBirth, Occupation, Bio
- References: User

### UserPreferences
- BudgetRange, PreferredLocation, MoveInDate
- CleanlinessLevel, SocialLevel, LifeStyleTraits, Hobbies
- References: User

### UserPhotos
- Array of photo URLs
- References: User

### UserPayment
- Subscription status, Date, Invoice data
- References: User

### UserSettings
- isMarketingOptedIn (boolean)
- References: User

### UserVerification
- Email, Phone, GovernmentId verification status
- References: User

---

## 🚀 Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Backend (Render / Railway)
1. Create new Web Service
2. Connect GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm run dev` or `node app.js`
5. Add environment variables
6. Deploy

### Database (MongoDB Atlas)
1. Create cluster on MongoDB Atlas
2. Whitelist IP addresses (or allow all: `0.0.0.0/0`)
3. Get connection string
4. Update `MONGO_URI` in environment variables

---

## 🛣 Roadmap

### Planned Features
- [ ] **OAuth Integration** – Google and GitHub login
- [ ] **Real-time Messaging** – Socket.IO chat implementation
- [ ] **Advanced Matching Algorithm** – ML-based compatibility scoring
- [ ] **User Verification** – Government ID and phone verification
- [ ] **Block/Report System** – Safety features
- [ ] **Admin Dashboard** – User management and analytics
- [ ] **Push Notifications** – Real-time alerts
- [ ] **Video Profiles** – Short introduction videos
- [ ] **Roommate Reviews** – Rating system for past roommates
- [ ] **Map Integration** – Location-based search

### In Progress
- 🔄 Socket.IO real-time chat (infrastructure ready)
- 🔄 Twilio phone verification (code prepared)

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

**Copyright (c) 2025 Vishankh**

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using the MERN Stack**
