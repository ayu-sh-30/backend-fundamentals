// ============================================================
// USER ROUTES
// ============================================================

// WHY SEPARATE ROUTES INTO FILES:
// As your app grows, keeping all routes in index.js becomes
// unmanageable. Separating by resource (users, products, orders)
// keeps the code modular and easy to find.

const express = require("express");

// express.Router() creates a mini Express app — just for routes.
// It has the same .get/.post/.route() methods as app.
const router = express.Router();

const fs = require("fs/promises");
const DATA_FILE = "./MOCK_DATA.json";

// --- Helper: read users from file ---
// WHY: Instead of loading users once at startup (stale data problem),
// we read fresh from the file each time. Fine for learning; in
// production you'd use a database instead.
const readUsers = async () => {
  const data = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(data);
};

// --- Helper: write users to file ---
const writeUsers = async (users) => {
  await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2));
};

// --- Helper: get max ID ---
// WHY: Using users.length + 1 breaks after deletions.
// e.g. delete user 5, now length is 4, next ID would be 5 again — collision.
const getNextId = (users) => {
  return users.reduce((max, u) => Math.max(max, u.id), 0) + 1;
};

// ============================================================
// GET /api/v1/users — get all users
// ============================================================
router.get("/", async (req, res, next) => {
  try {
    const users = await readUsers();
    return res.status(200).json(users);
  } catch (err) {
    next(err); // passes to errorHandler middleware
  }
});

// ============================================================
// POST /api/v1/users — create a new user
// ============================================================
router.post("/", async (req, res, next) => {
  try {
    const { first_name, last_name, email, role } = req.body;

    // Validate required fields
    if (!first_name || !last_name || !email) {
      const err = new Error("first_name, last_name, and email are required");
      err.statusCode = 400; // 400 Bad Request
      return next(err);
    }

    const users = await readUsers();
    const newUser = {
      id: getNextId(users),
      first_name,
      last_name,
      email,
      role: role || "user", // default role
    };

    users.push(newUser);
    await writeUsers(users);

    // 201 Created — correct status for successful resource creation
    return res.status(201).json({ status: "Success", user: newUser });
  } catch (err) {
    next(err);
  }
});

// ============================================================
// Routes that need an :id — chained with .route()
// ============================================================
router
  .route("/:id")

  // GET /api/v1/users/:id — get one user
  .get(async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      // WHY Number(): URL params are always strings.
      // "1" === 1 is false, so we convert before comparing.

      const users = await readUsers();
      const user = users.find((u) => u.id === id);

      if (!user) {
        const err = new Error(`User with id ${id} not found`);
        err.statusCode = 404;
        return next(err);
      }

      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  })

  // PUT /api/v1/users/:id — REPLACE the entire user
  // WHY PUT vs PATCH: PUT replaces the whole resource.
  // You must send all fields. Missing fields will be lost.
  .put(async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const { first_name, last_name, email, role } = req.body;

      if (!first_name || !last_name || !email) {
        const err = new Error("PUT requires all fields: first_name, last_name, email");
        err.statusCode = 400;
        return next(err);
      }

      const users = await readUsers();
      const index = users.findIndex((u) => u.id === id);

      if (index === -1) {
        const err = new Error(`User with id ${id} not found`);
        err.statusCode = 404;
        return next(err);
      }

      // Replace the entire user object, keeping the original id
      users[index] = { id, first_name, last_name, email, role: role || "user" };
      await writeUsers(users);

      return res.status(200).json({ status: "Success", user: users[index] });
    } catch (err) {
      next(err);
    }
  })

  // PATCH /api/v1/users/:id — UPDATE only the fields sent
  // WHY PATCH vs PUT: PATCH is partial. Only the fields you send are updated.
  // Fields you don't send stay as they are.
  .patch(async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const users = await readUsers();
      const index = users.findIndex((u) => u.id === id);

      if (index === -1) {
        const err = new Error(`User with id ${id} not found`);
        err.statusCode = 404;
        return next(err);
      }

      // Spread: keep old fields, overwrite with new ones from body
      users[index] = { ...users[index], ...req.body };
      await writeUsers(users);

      return res.status(200).json({ status: "Success", user: users[index] });
    } catch (err) {
      next(err);
    }
  })

  // DELETE /api/v1/users/:id — remove a user
  .delete(async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const users = await readUsers();
      const index = users.findIndex((u) => u.id === id);

      if (index === -1) {
        const err = new Error(`User with id ${id} not found`);
        err.statusCode = 404;
        return next(err);
      }

      // splice(index, 1) removes 1 element at the given index
      const deletedUser = users.splice(index, 1)[0];
      await writeUsers(users);

      return res.status(200).json({ status: "Success", deleted: deletedUser });
    } catch (err) {
      next(err);
    }
  });

module.exports = router;