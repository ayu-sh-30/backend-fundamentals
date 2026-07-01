// ============================================================
// ARROW FUNCTIONS
// ============================================================

// WHY THIS MATTERS IN BACKEND:
// Arrow functions are the standard way to write route handlers,
// middleware, and callbacks in modern Express code.

// --- Syntax variations ---

// Multiple params, with body
const add = (a, b) => {
    return a + b;
  };
  
  // Single param — parentheses optional
  const double = (n) => n * 2;
  
  // No params
  const sayHello = () => "Hello!";
  
  // Returning an object — wrap in parentheses to avoid confusion with block
  const makeUser = (name) => ({ name, createdAt: new Date() });
  
  // --- Key difference from regular functions: `this` ---
  // Arrow functions do NOT have their own `this`.
  // They inherit `this` from the surrounding scope.
  // This matters in class-based code, but for Express route handlers,
  // you mostly won't need `this` — so arrow functions are preferred.
  
  // --- Common use in Express ---
  
  // Route handler
  // app.get("/users", (req, res) => {
  //   res.json(users);
  // });
  
  // Array methods
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  
  const names = users.map((user) => user.name);       // ["Alice", "Bob"]
  const found = users.find((user) => user.id === 2);  // { id: 2, name: "Bob" }