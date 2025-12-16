# Mini Event Platform – Backend

This is the backend for a Mini Event Platform built using the MERN stack.

## Features
- User Registration & Login (JWT Authentication)
- Protected Routes
- Create Events
- Get All Events
- RSVP to Events
- MongoDB Atlas integration

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT
- bcrypt

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Events (Protected)
- GET /api/events
- POST /api/events
- POST /api/events/:id/rsvp

## Environment Variables
Create a .env file inside server/:

MONGO_URI=your_mongodb_uri JWT_SECRET=your_secret

## Run Locally
```bash
cd server
npm install
node server.js
