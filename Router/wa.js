const express = require("express");
const router = express.Router();
const api = require("../Controller/WAController")

// router.get("/api", api);
router.post("/sendWA", api);
module.exports = router;