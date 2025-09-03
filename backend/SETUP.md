# BlogSpace Backend Setup Guide

## Environment Variables

Create a `.env` file in the backend root directory with the following variables:

```env
# Database Configuration
MONGO_URI=mongodb://localhost:27017/blogspace

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
JWT_EXPIRE=7d

# Server Configuration
PORT=5000
NODE_ENV=development
```

## Important Notes

1. **MONGO_URI**: This is required for the application to work. If not set, the app will crash.
2. **JWT_SECRET**: If not set, a default secret will be used (NOT recommended for production).
3. **JWT_EXPIRE**: Defaults to 7 days if not set.

## Default Values

The application will use these defaults if environment variables are not set:
- JWT_SECRET: `default_jwt_secret_for_development_only_change_in_production`
- JWT_EXPIRE: `7d`
- PORT: `5000`
- NODE_ENV: `development`

## CORS Configuration

The following origins are allowed by default:
- `http://localhost:3000` (local development)
- `https://68b6a41a2a53753299346d9b--tangerine-cupcake-145674.netlify.app`
- `https://68b7d67c50b926e6de351b0a--tangerine-cupcake-145674.netlify.app`
- `https://tangerine-cupcake-145674.netlify.app`

## Running the Application

1. Install dependencies: `npm install`
2. Set up environment variables (see above)
3. Start the server: `npm start` or `npm run dev` for development
