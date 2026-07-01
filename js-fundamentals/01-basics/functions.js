// ============================================================
// FUNCTIONS
// ============================================================

// WHY THIS MATTERS IN BACKEND:
// Almost everything in Express is a function — route handlers,
// middleware, callbacks. Knowing the different forms matters.

// --- Function Declaration ---
// Hoisted — can be called before it's defined in the file.
function greet(name) {
    return `Hello, ${name}`;
  }
  
  // --- Function Expression ---
  // Stored in a variable. NOT hoisted.
  const greetUser = function (name) {
    return `Hello, ${name}`;
  };
  
  // --- Arrow Function ---
  // Shorter syntax. Very common in modern Node/Express code.
  // Key difference: does NOT have its own `this` binding.
  const greetArrow = (name) => `Hello, ${name}`;
  
  // --- Default Parameters ---
  // If no argument is passed, the default is used.
  const createUser = (name = "Anonymous", role = "user") => {
    return { name, role }; // shorthand for { name: name, role: role }
  };
  
  console.log(createUser());              // { name: 'Anonymous', role: 'user' }
  console.log(createUser("Alice", "admin")); // { name: 'Alice', role: 'admin' }
  
  // --- Higher Order Functions ---
  // Functions that take other functions as arguments.
  // You'll see this EVERYWHERE in Express (route handlers ARE callbacks).
  
  const numbers = [1, 2, 3, 4, 5];
  
  // map — transforms every element, returns a new array
  const doubled = numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]
  
  // filter — keeps elements that pass the test
  const evens = numbers.filter((n) => n % 2 === 0); // [2, 4]
  
  // find — returns the FIRST match (used heavily for finding users by ID)
  const found = numbers.find((n) => n === 3); // 3
  
  // reduce — collapses array to a single value
  const sum = numbers.reduce((total, n) => total + n, 0); // 15