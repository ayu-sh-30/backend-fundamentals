// ============================================================
// CALLBACKS
// ============================================================

// WHY THIS MATTERS IN BACKEND:
// Node.js is async by nature. When you read a file, query a DB,
// or make an HTTP request, it takes time. Callbacks were the
// original solution. You saw this with fs.writeFile() in Express.

const fs = require("fs");

// A callback is just a function passed as an argument,
// to be called AFTER something finishes.

// Node.js callback convention: (err, result)
// First argument is ALWAYS the error (null if no error)
// Second argument is the result

fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Failed to read file:", err.message);
    return; // IMPORTANT: return to stop execution
  }
  console.log("File contents:", data);
});

console.log("This runs BEFORE the file is read"); 
// Node doesn't wait — it schedules the file read and moves on.

// --- Callback Hell ---
// When you nest callbacks, it gets ugly fast:

fs.readFile("file1.txt", "utf-8", (err, data1) => {
  if (err) return console.error(err);
  fs.readFile("file2.txt", "utf-8", (err, data2) => {
    if (err) return console.error(err);
    fs.writeFile("output.txt", data1 + data2, (err) => {
      if (err) return console.error(err);
      console.log("Done!"); // deeply nested — hard to read and maintain
    });
  });
});

// THIS is why Promises and async/await were invented.
// See promises.js and async-await.js for the better ways.