// ============================================================
// PROMISES
// ============================================================

// A Promise is an object that represents a future value.
// It's in one of three states:
// - pending   (still working)
// - fulfilled (done, has a value)
// - rejected  (failed, has an error)

// Creating a promise:
const fetchUser = (id) => {
    return new Promise((resolve, reject) => {
      const users = [{ id: 1, name: "Alice" }];
      const user = users.find((u) => u.id === id);
  
      if (user) {
        resolve(user);      // success — pass the result
      } else {
        reject(new Error("User not found")); // failure — pass an error
      }
    });
  };
  
  // Consuming a promise with .then() / .catch()
  fetchUser(1)
    .then((user) => console.log("Found:", user))
    .catch((err) => console.error("Error:", err.message))
    .finally(() => console.log("Done — always runs"));
  
  // Chaining promises:
  fetchUser(1)
    .then((user) => {
      // transform and return a new value
      return { ...user, role: "admin" };
    })
    .then((enrichedUser) => {
      console.log(enrichedUser); // { id: 1, name: "Alice", role: "admin" }
    })
    .catch((err) => console.error(err.message));
  
  // Promise.all — run multiple promises in PARALLEL, wait for all
  Promise.all([fetchUser(1), fetchUser(2)])
    .then(([user1, user2]) => console.log(user1, user2))
    .catch((err) => console.error(err.message));
  // If ANY promise rejects, the whole thing rejects.