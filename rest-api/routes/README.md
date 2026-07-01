# Routes

Routes define how the API responds to HTTP requests.

## File

| File | Mounted at | Purpose |
|---|---|---|
| `users.js` | `/api/v1/users` | Full CRUD operations on users |

## HTTP Methods — When to use which

| Method | Purpose | Sends body? | Idempotent? |
|---|---|---|---|
| GET | Read data | No | Yes |
| POST | Create new resource | Yes | No |
| PUT | Replace entire resource | Yes | Yes |
| PATCH | Update part of a resource | Yes | Yes |
| DELETE | Remove a resource | No | Yes |

**Idempotent** means calling it multiple times gives the same result.
- GET /users/1 always returns the same user
- DELETE /users/1 twice — second call just returns 404, no harm done
- POST /users twice — creates TWO users (not idempotent)

## URL Structure

```
/api  /v1      /users  /:id
  |     |         |      |
  |     |         |      └── specific resource
  |     |         └───────── resource name (plural)
  |     └─────────────────── API version
  └───────────────────────── signals this is an API endpoint
```