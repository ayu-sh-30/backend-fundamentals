// ============================================================
// DESTRUCTURING
// ============================================================

// WHY THIS MATTERS IN BACKEND:
// In Express, req.body, req.params, req.query are all objects.
// Destructuring lets you pull exactly what you need cleanly.

// --- Object Destructuring ---
const user = { id: 1, name: "Alice", email: "alice@example.com", role: "admin" };

// Without destructuring:
const userName = user.name;
const userEmail = user.email;

// With destructuring:
const { name, email } = user;

// Rename while destructuring:
const { name: fullName } = user;
console.log(fullName); // "Alice"

// Default values:
const { role = "user" } = user; // uses "admin" since it exists
const { age = 25 } = user;     // uses 25 since age doesn't exist

// In Express, you'll write this constantly:
// const { first_name, last_name, email } = req.body;

// --- Array Destructuring ---
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40, 50]

// --- Nested Destructuring ---
const response = {
  status: 200,
  data: {
    user: { id: 1, name: "Alice" },
  },
};

const { data: { user: { name: responseUserName } } } = response;
console.log(responseUserName); // "Alice"