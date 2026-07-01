// ============================================================
// LOOPS
// ============================================================

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  
  // --- for loop ---
  // Most basic. Full control over index.
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
  }
  
  // --- for...of ---
  // Cleaner when you don't need the index.
  for (const user of users) {
    console.log(user.name);
  }
  
  // --- forEach ---
  // Runs a function on each element. Cannot break out early.
  users.forEach((user) => {
    console.log(user.name);
  });
  
  // --- for...in ---
  // Loops over object KEYS. Use on plain objects, not arrays.
  const config = { port: 8000, host: "localhost" };
  for (const key in config) {
    console.log(`${key}: ${config[key]}`);
  }
  
  // WHICH TO USE WHEN:
  // Transforming data?     → map()
  // Filtering data?        → filter()
  // Finding one item?      → find()
  // Just iterating?        → for...of or forEach()
  // Need index?            → for loop or .map() with index param