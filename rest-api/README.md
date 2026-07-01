# REST API — Express Fundamentals

A fully documented REST API built with Node.js and Express.
Every design decision is explained inline.

## Setup

```bash
cd rest-api
npm install
npm run dev    # uses nodemon for auto-restart
```

## Endpoints

| Method | URL | Description |
|---|---|---|
| GET | `/users` | Returns all users as HTML |
| GET | `/api/v1/users` | Returns all users as JSON |
| GET | `/api/v1/users/:id` | Returns one user by ID |
| POST | `/api/v1/users` | Creates a new user |
| PUT | `/api/v1/users/:id` | Replaces a user entirely |
| PATCH | `/api/v1/users/:id` | Updates specific fields of a user |
| DELETE | `/api/v1/users/:id` | Deletes a user |

## POST / PUT body example (JSON)

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "role": "user"
}
```

## Project Structure

```
rest-api/
├── index.js          ← entry point, middleware setup, server start
├── .env              ← environment variables (not committed to git)
├── .gitignore
├── MOCK_DATA.json    ← fake database (JSON file)
├── package.json
├── middleware/
│   ├── logger.js     ← logs every request
│   └── errorHandler.js ← centralized error responses
└── routes/
    └── users.js      ← all user CRUD routes
```

## Key Concepts Demonstrated

- Routing with `express.Router()`
- All 5 HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Async/await with proper try/catch in every route
- Centralized error handling via middleware
- File system persistence with `fs/promises`
- Environment variables with `dotenv`
- Input validation with meaningful error messages
- API versioning (`/api/v1/`)