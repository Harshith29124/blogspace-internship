# 🚀 BlogSpace - Full Stack Blogging Platform

A modern, feature-rich blogging platform built during a 7-day intensive internship project showcasing full-stack development skills with React, Node.js, and MongoDB.

![BlogSpace Screenshot](https://via.placeholder.com/800x400?text=BlogSpace+Dashboard)

## 🌟 *Live Demo*

- *Frontend*: [Deployed on Netlify]( https://68b6a41a2a53753299346d9b--tangerine-cupcake-145674.netlify.app)
- *Backend API*: [Deployed on Render]( https://blogspace-internship.onrender.com )

)

## 🎯 *Project Overview*

BlogSpace is a comprehensive blogging platform that demonstrates modern web development practices, featuring user authentication, content management, and administrative controls. Built following industry standards with clean, maintainable code.

## ✨ *Features*

### 🔐 *Authentication & Security*
- JWT-based user authentication
- Password hashing with bcrypt
- Protected routes and middleware
- Role-based access control (User/Admin)

### 📝 *Blog Management*
- Create, read, update, delete blog posts
- Rich text editor with React Quill
- Draft and published post states
- Auto-generated excerpts and read time calculation
- Tag system for content categorization

### 👥 *User Management*
- User registration and login
- Profile management
- Personal dashboard with user's posts
- Admin panel for user role management

### 🎨 *Modern UI/UX*
- Responsive design with TailwindCSS
- Clean, professional interface
- Mobile-first approach
- Loading states and error handling
- Intuitive navigation

### ⚙ *Admin Features*
- User role management (promote/demote users)
- Content moderation (delete inappropriate posts)
- Dashboard with analytics
- Comprehensive user and post management

## 🛠 *Tech Stack*

### *Frontend*
- *React 19* - Modern UI library
- *React Router* - Client-side routing
- *Context API* - State management
- *Axios* - HTTP client
- *React Quill* - Rich text editor
- *TailwindCSS* - Utility-first CSS framework

### *Backend*
- *Node.js* - Runtime environment
- *Express.js* - Web application framework
- *MongoDB* - NoSQL database
- *Mongoose* - MongoDB object modeling
- *JWT* - JSON Web Tokens for authentication
- *bcrypt* - Password hashing

### *DevOps & Deployment*
- *Git* - Version control
- *Netlify* - Frontend hosting
- *Render* - Backend hosting
- *MongoDB Atlas* - Cloud database

## 🚀 *Getting Started*

### *Prerequisites*
- Node.js (v14 or higher)
- MongoDB (local installation or Atlas account)
- Git

### *Installation*

1. *Clone the repository*
git clone https://github.com/Harshith29124/blogspace-internship.git
cd blogspace-internship

text

2. *Setup Backend*
cd backend
npm install

Create .env file with your configurations
cp .env.example .env

Edit .env with your MongoDB URI, JWT secret, etc.
npm run dev

text

3. *Setup Frontend*
cd ../frontend
npm install
npm start

text

4. *Environment Variables*

Create backend/.env:
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d

text

### *Usage*

1. Visit http://localhost:3000
2. Register a new account or use demo credentials
3. Start creating and managing blog posts
4. Access admin features (if admin role assigned)

## 🎪 *Demo Credentials*

*Admin Account:*
- Email: admin@blogspace.com
- Password: admin123

*Regular User:*
- Email: user@blogspace.com
- Password: user123

## 📁 *Project Structure*

blogspace-internship/
├── backend/
│ ├── config/ # Database configuration
│ ├── controllers/ # Route controllers
│ ├── middleware/ # Authentication middleware
│ ├── models/ # Database models
│ ├── routes/ # API routes
│ └── server.js # Express server setup
├── frontend/
│ ├── public/ # Static assets
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── context/ # Context providers
│ │ ├── styles/ # CSS files
│ │ └── App.js # Main app component
│ └── package.json
├── docs/ # API documentation
└── README.md

text

## 🔌 *API Endpoints*

### *Authentication*
- POST /api/auth/register - User registration
- POST /api/auth/login - User login

### *Blog Posts*
- GET /api/posts - Get all posts (public)
- GET /api/posts/:id - Get single post
- POST /api/posts - Create new post (protected)
- PUT /api/posts/:id - Update post (owner/admin)
- DELETE /api/posts/:id - Delete post (owner/admin)
- GET /api/posts/user/my-posts - Get user's posts (protected)

### *Admin*
- GET /api/admin/users - Get all users (admin only)
- PUT /api/admin/users/:id/role - Update user role (admin only)
- GET /api/admin/posts - Get all posts (admin only)
- DELETE /api/admin/posts/:id - Delete any post (admin only)

## 🎯 *Key Learning Outcomes*

- *Full-Stack Development* - End-to-end application development
- *Modern React Patterns* - Hooks, Context API, component composition
- *RESTful API Design* - Proper HTTP methods, status codes, and responses
- *Authentication & Security* - JWT implementation, password hashing, route protection
- *Database Design* - MongoDB schema design and relationships
- *State Management* - Complex state handling across components
- *Responsive Design* - Mobile-first, modern UI/UX principles
- *Deployment* - Production deployment and environment configuration

## 🚀 *Deployment*

### *Frontend (Netlify)*
1. Build the project: npm run build
2. Deploy build folder to Netlify
3. Configure redirects for SPA routing

### *Backend (Render)*
1. Connect GitHub repository to Render
2. Configure environment variables
3. Deploy with automatic builds

### *Database (MongoDB Atlas)*
1. Create cluster on MongoDB Atlas
2. Configure network access and database users
3. Update connection string in environment variables

## 🤝 *Contributing*

This project was built as part of an internship program. For educational purposes:

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📝 *License*

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 *Developer*

*Harshith*
- GitHub: [@Harshith29124](https://github.com/Harshith29124)
- LinkedIn: [https://www.linkedin.com/in/harshith-nayaka-l-518b98348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

## 🙏 *Acknowledgments*

- Internship program organizers
- Open source community for amazing tools and libraries
- React, Node.js, and MongoDB documentation teams

---

⭐ *If you found this project helpful, please give it a star!*
