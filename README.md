# Movie Search App

A full-stack web application for searching movies using the OMDB API. Built with React frontend and Express backend.

## Features

- 🎬 Search movies by title
- 🖼️ Display movie posters, titles, and release years
- 📱 Responsive grid layout
- 🎨 Modern gradient UI with smooth animations

## Project Structure

```
movie-search-app/
├── backend/
│   └── server.js          # Express server with OMDB API integration
├── frontend/
│   ├── public/            # Static files
│   ├── src/               # React components
│   └── package.json
└── package.json
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

### Backend Setup

```bash
cd backend
npm install
```

### Frontend Setup

```bash
cd frontend
npm install
```

## Running the Application

### Start Backend Server

```bash
cd backend
npm start
```

Server runs on `http://localhost:5000`

### Start Frontend Development Server

```bash
cd frontend
npm start
```

App runs on `http://localhost:3000`

## Environment Variables

Create a `.env` file in the backend directory (if needed for production):

```
OMDB_API_KEY=37ae9866
PORT=5000
```

## Available Scripts

### Frontend

- `npm start` - Runs the React app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

### Backend

- `npm start` - Starts the Express server

## Technologies Used

- **Frontend**: React 19, React DOM, CSS3
- **Backend**: Express.js, Axios, CORS
- **API**: OMDB API
- **Testing**: Jest, React Testing Library

## API Endpoints

- `GET /api/movies?search=<query>` - Search for movies by title


