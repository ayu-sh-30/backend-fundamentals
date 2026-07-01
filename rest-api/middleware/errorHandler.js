// ============================================================
// CENTRALIZED ERROR HANDLING MIDDLEWARE
// ============================================================

// WHY CENTRALIZE ERRORS:
// Without this, you'd write error responses in every single route.
// A centralized handler means one place to control all error responses.

// Express identifies error-handling middleware by its 4 parameters.
// The first parameter MUST be `err`. This is a hard Express rule.

const errorHandler = (err, req, res, next) => {
    // Log the full error stack in development for debugging
    console.error(`[ERROR] ${err.message}`);
    console.error(err.stack);
  
    // Use the error's statusCode if set, otherwise default to 500
    const statusCode = err.statusCode || 500;
  
    res.status(statusCode).json({
      status: "error",
      message: err.message || "Internal Server Error",
    });
  };
  
  module.exports = errorHandler;
  
  // --- HOW TO USE IN ROUTES ---
  // When something goes wrong in a route, call next(err):
  //
  // app.get("/api/v1/users/:id", (req, res, next) => {
  //   try {
  //     const user = users.find(u => u.id === Number(req.params.id));
  //     if (!user) {
  //       const err = new Error("User not found");
  //       err.statusCode = 404;
  //       return next(err); // passes error to errorHandler middleware
  //     }
  //     res.json(user);
  //   } catch (err) {
  //     next(err); // unexpected errors also go here
  //   }
  // });