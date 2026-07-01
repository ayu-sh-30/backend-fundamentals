# Middleware

Middleware are functions that run between a request arriving and a route handler responding.

## Signature

Every middleware follows this pattern:

```js
const myMiddleware = (req, res, next) => {
  // do something
  next(); // pass control to the next middleware or route
};
```

## Files

| File | Purpose |
|---|---|
| `logger.js` | Logs every incoming request with timestamp, method, and URL |
| `errorHandler.js` | Centralized error responses — receives errors passed via `next(err)` |

## Order matters

Middleware runs in the order it is registered with `app.use()`.
- Middleware registered BEFORE routes runs on all requests
- Middleware registered AFTER routes only catches what falls through
- Error handlers MUST be last (4 parameters: err, req, res, next)