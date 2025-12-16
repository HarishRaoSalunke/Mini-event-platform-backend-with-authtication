# Mini Event Platform (MERN Backend)

## Project Description

A backend application built using Node.js, Express, MongoDB, and JWT authentication.  
Users can register, login, create events, view events, and RSVP to events securely.

---

## Features

- User Registration & Login
- JWT Authentication
- Protected Routes
- Create / Update / Delete Events
- RSVP to Events
- MongoDB Atlas Integration

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

---

## Folder Structure

server/ ├── controllers ├── middleware ├── models ├── routes ├── server.js └── .env

---

## API Endpoints

### Auth

- POST /api/auth/register
- POST /api/auth/login

### Events

- POST /api/events (Protected)
- GET /api/events
- PUT /api/events/:id (Creator only)
- DELETE /api/events/:id (Creator only)
- POST /api/events/:id/rsvp (Protected)

---

## How to Run

1. Clone the repository
2. Navigate to server folder
3. Install dependencies:

npm install

4. Create .env file:

MONGO_URI=your_mongodb_uri JWT_SECRET=your_secret

5. Start server:

node server.js

---

## Author

Harish
