const express = require("express");
const router = express.Router();

const { getAll } = require("../controller/coffee");

router.get("/", getAll);

module.exports = router;
