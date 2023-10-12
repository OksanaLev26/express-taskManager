# Task Manager Backend

This is the backend part of the Task Manager application, a web-based task management system built with Express.js. It provides a RESTful API for creating, reading, updating, and deleting tasks, as well as managing their statuses.

## Features

- Provides RESTful API endpoints for tasks.
- Supports CRUD operations for tasks.
- Handles task status changes through API calls.

## Technologies Used

- Express.js
- Node.js
- cors
- dotenv
- express
- mongoose

## Getting Started

1. Clone this repository to your local machine.
git clone https://github.com/OksanaLev26/express-taskManager
2. Navigate to the project directory:
cd express-taskManager
3. Install dependencies:
npm install
4. Start the Express.js server:
nodemon server

The server will be available at [http://localhost:3001].
Deployed app is available at [https://test-deploy-server-8qyd.onrender.com/].

## API Endpoints

- GET /api/ - Get a list of all tasks.
- POST /api/ - Create a new task.
- GET /api/:id - Get a specific task by ID.
- PUT /api/:id -  Update a task by ID.
- DELETE /api/:id - Delete a task by ID.