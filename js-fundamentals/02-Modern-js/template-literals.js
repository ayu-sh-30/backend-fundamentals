// ============================================================
// TEMPLATE LITERALS
// ============================================================

// WHY THIS MATTERS IN BACKEND:
// Used for building dynamic HTML responses, log messages,
// error messages, and SQL queries.

const name = "Alice";
const port = 8000;

// Old way (concatenation — messy and error-prone)
const oldMsg = "Hello, " + name + "! Server running on port " + port;

// New way (template literal — clean and readable)
const newMsg = `Hello, ${name}! Server running on port ${port}`;

// You can put ANY expression inside ${}
const a = 5, b = 10;
console.log(`Sum is ${a + b}`);              // Sum is 15
console.log(`Is admin: ${a > b}`);           // Is admin: false

// Multiline strings — no \n needed
const html = `
  <ul>
    <li>${name}</li>
  </ul>
`;

// Tagged templates (advanced — for libraries like SQL query builders)
// Not needed right now, but good to know they exist.

// In Express, you saw this in the /users HTML route:
// res.send(`<ul>${users.map(u => `<li>${u.first_name}</li>`).join("")}</ul>`);