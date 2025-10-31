# 🔐 Full-Stack Authentication App

A modern, responsive authentication system built with React and Node.js featuring beautiful UI design and secure user management.

## ✨ Features

- **🎨 Beautiful UI** - Modern gradient design with Tailwind CSS
- **🔄 Login/Signup Toggle** - Seamless switching between authentication modes
- **✅ Form Validation** - Real-time validation with error handling
- **🔒 Secure Backend** - Express.js with bcrypt password hashing
- **📱 Responsive Design** - Works perfectly on all devices
- **⚡ Fast Loading** - Built with Vite for optimal performance

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <url>
   cd Practice
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start MongoDB**
   - Local: Start your MongoDB service
   - Cloud: Update connection string in `backend/server.js`

5. **Run the application**
   
   **Backend (Terminal 1):**
   ```bash
   cd backend
   npm start
   ```
   
   **Frontend (Terminal 2):**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Open your browser**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3000`

## 📁 Project Structure

```
Practice/
├── backend/
│   ├── server.js          # Express server & API routes
│   ├── package.json       # Backend dependencies
│   └── .gitignore
└── frontend/
    ├── src/
    │   ├── App.jsx        # Main React component
    │   ├── main.jsx       # React entry point
    │   └── index.css      # Tailwind CSS imports
    ├── package.json       # Frontend dependencies
    └── index.html         # HTML template
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/signup` | Register new user |
| POST | `/login` | Authenticate user |

## 🎨 UI Features

- **Gradient Background** - Beautiful blue to indigo gradient
- **Card Design** - Clean white cards with shadows
- **Form Validation** - Real-time error feedback
- **Loading States** - Spinner during API calls
- **Responsive Layout** - Mobile-first design

## 🔒 Security Features

- Password hashing with bcrypt
- Input validation and sanitization
- CORS protection
- Error handling for secure responses

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Issues

Found a bug? Please open an issue [here](../../issues).

---

⭐ **Star this repo if you found it helpful!**"# Restful_Authentication-basic-" 
