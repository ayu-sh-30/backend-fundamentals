// ============================================================
// ASYNC / AWAIT
// ============================================================

// WHY THIS MATTERS IN BACKEND:
// This is the modern standard for writing async code in Node.js.
// Under the hood it's still Promises — just much more readable.
// You'll use this for file operations, database queries, and API calls.

const fs = require("fs/promises"); // the promise-based version of fs

// async keyword makes a function return a Promise automatically
// await pauses execution INSIDE the function until the Promise resolves

const readAndWrite = async () => {
  try {
    // await unwraps the promise — gives you the value directly
    const data = await fs.readFile("./data.txt", "utf-8");
    console.log("Read:", data);

    await fs.writeFile("./output.txt", data.toUpperCase());
    console.log("Written successfully");

  } catch (err) {
    // all errors (from any awaited line) are caught here
    console.error("Something went wrong:", err.message);
  }
};

readAndWrite();

// --- Compared to callback version ---
// Callbacks: deeply nested, error checked manually each time
// Async/await: reads top to bottom, ONE catch block handles all errors

// --- In Express routes ---
// app.get("/users", async (req, res) => {
//   try {
//     const data = await fs.readFile("./MOCK_DATA.json", "utf-8");
//     const users = JSON.parse(data);
//     return res.json(users);
//   } catch (err) {
//     return res.status(500).json({ message: "Failed to load users" });
//   }
// });

// RULE: Always use try/catch with async/await. Never let an async
// function throw an unhandled error — in Express, it will crash
// the request silently without sending a response.