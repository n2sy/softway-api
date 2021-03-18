const express = require("express");

const cvController = require("../controllers/cv");

const router = express.Router();

router.get('/persons', cvController.getAllPersons);

module.exports = router;
