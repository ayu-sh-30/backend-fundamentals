// ============================================================
// MODULES — CommonJS vs ES Modules
// ============================================================

// WHY THIS MATTERS IN BACKEND:
// Node.js code is split across files. Modules are how files
// share code with each other. You'll use this in every project.

// -----------------------------------------------
// CommonJS (CJS) — the DEFAULT in Node.js
// -----------------------------------------------

// EXPORTING (in users.js for example):
// const users = [{ id: 1, name: "Alice" }];
// module.exports = users;             // export a single value
//
// OR export multiple things:
// module.exports = { getUsers, createUser };

// IMPORTING:
// const users = require("./users");
// const { getUsers, createUser } = require("./users");
// const express = require("express");  // from node_modules

// -----------------------------------------------
// ES Modules (ESM) — modern standard, used in frontend & newer Node
// -----------------------------------------------
// To use ESM in Node, either:
// 1. Name your file .mjs  OR
// 2. Add "type": "module" in package.json

// EXPORTING:
// export const greet = (name) => `Hello ${name}`;
// export default users;  // one default export per file

// IMPORTING:
// import users from "./users.js";
// import { greet } from "./utils.js";
// import express from "express";

// -----------------------------------------------
// RULE OF THUMB FOR NOW:
// Stick with CommonJS (require/module.exports) for Node/Express.
// You'll see ESM in React/frontend code.
// -----------------------------------------------