// ============================================================
// CUSTOM MIDDLEWARE — Request Logger
// ============================================================

// WHY MIDDLEWARE EXISTS:
// Middleware is a function that runs BETWEEN the request arriving
// and the route handler responding. It's how you add shared logic
// (logging, auth, validation) without repeating it in every route.

// Middleware signature: always (req, res, next)
// - req  → the incoming request object
// - res  → the response object
// - next → a function that passes control to the next middleware/route
//           MUST be called, or the request will hang forever.

const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    // Example output: [2024-01-15T10:30:00.000Z] GET /api/v1/users
  
    next(); // IMPORTANT: without this, the request stops here
  };
  
  module.exports = logger;