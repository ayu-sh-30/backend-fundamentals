// ============================================================
// SPREAD AND REST OPERATORS  ( ... )
// ============================================================

// Same syntax, different purpose depending on context.

// --- SPREAD: expands an iterable ---

// Copying an object (used when updating a user in PATCH routes)
const user = { id: 1, name: "Alice", role: "user" };
const updatedUser = { ...user, role: "admin" }; // overrides role
console.log(updatedUser); // { id: 1, name: "Alice", role: "admin" }

// Merging objects
const defaults = { theme: "dark", language: "en" };
const userPrefs = { language: "hi" };
const finalPrefs = { ...defaults, ...userPrefs };
console.log(finalPrefs); // { theme: "dark", language: "hi" }

// Copying an array
const original = [1, 2, 3];
const copy = [...original]; // not the same reference

// In Express PATCH handler you'll see:
// users[index] = { ...users[index], ...req.body };
// This keeps old fields, but overwrites with new values from request body.

// --- REST: collects remaining values ---

// In functions — gathers extra arguments into an array
function logAll(first, second, ...others) {
  console.log(first);   // first arg
  console.log(second);  // second arg
  console.log(others);  // array of everything else
}
logAll(1, 2, 3, 4, 5);

// In destructuring — collects remaining fields
const { id, ...withoutId } = user;
console.log(withoutId); // { name: "Alice", role: "user" }
// Useful when you want to send user data WITHOUT the id.