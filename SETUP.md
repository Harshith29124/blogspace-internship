# BlogSpace Setup Guide

## Issues Fixed

1. **Authentication Flow**: Updated App.js to redirect unauthenticated users to login page instead of showing posts
2. **API Endpoints**: Centralized all API calls to use the correct backend URL
3. **CORS Configuration**: Backend already configured to allow Netlify frontend

## Backend Setup

### Required Environment Variables

Create a `.env` file in the `backend/` directory with:

```env
# Database Configuration
MONGO_URI=mongodb://localhost:27017/blogspace

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Server Configuration
PORT=5000
```

### Install Dependencies

```bash
cd backend
npm install
```

### Start Backend

```bash
npm run dev
```

## Frontend Setup

### Install Dependencies

```bash
cd frontend
npm install
```

### Start Frontend

```bash
npm start
```

## Current Status

- ✅ Frontend redirects unauthenticated users to login
- ✅ All API endpoints use centralized configuration
- ✅ Backend CORS allows Netlify frontend
- ✅ Authentication middleware properly configured
- ✅ User and Post models properly configured

## Testing

1. Open the website - should redirect to login page
2. Register a new account
3. Login with credentials
4. Should redirect to dashboard
5. Can create posts, view posts, etc.

## API Endpoints

- **Auth**: `/api/auth/login`, `/api/auth/register`
- **Posts**: `/api/posts` (public), `/api/posts/user/my-posts` (protected)
- **Admin**: `/api/admin/users`, `/api/admin/posts` (admin only)

## Troubleshooting

If you still see "Failed to load posts":
1. Check if backend is running
2. Verify MongoDB connection
3. Check browser console for CORS errors
4. Ensure environment variables are set correctly
