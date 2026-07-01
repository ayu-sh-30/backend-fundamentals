// ============================================================
// VARIABLES — var, let, const
// ============================================================

// WHY THIS MATTERS IN BACKEND:
// Node.js runs for a long time (it's a server, not a webpage).
// Accidentally reusing or reassigning a variable can cause bugs
// that are very hard to track. Choosing the right declaration matters.

// --- var ---
// Old way. Avoid it. Has two problems:
// 1. Function-scoped (not block-scoped), so it leaks out of if/for blocks
// 2. Gets hoisted to the top of its scope (can be used before declared)

var name = "Alice";
var name = "Bob"; // No error! Silently overwrites. This is dangerous.

// --- let ---
// Block-scoped. Can be reassigned. Use when value will change.
let port = 8000;
port = 9000; // OK — reassignment is allowed

// --- const ---
// Block-scoped. Cannot be reassigned. Use by default.
// NOTE: const on an object/array doesn't freeze the contents,
// just prevents the variable from pointing to something else.

const PORT = 8000; // Convention: UPPER_CASE for true constants
// PORT = 9000; // ❌ TypeError: Assignment to constant variable

const user = { name: "Alice" };
user.name = "Bob"; // ✅ This works — we're mutating, not reassigning
// user = {};      // ❌ This fails — reassignment not allowed

// RULE OF THUMB:
// Use const by default.
// Use let only when you know the value needs to change.
// Never use var.