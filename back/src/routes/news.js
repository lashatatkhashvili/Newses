const express = require("express");
const router = express.Router();
const newsController = require("../controllers/news");

router.get("/", newsController.getNewses);

module.exports = router;
