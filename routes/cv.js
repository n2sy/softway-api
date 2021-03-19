const express = require("express");

const cvController = require("../controllers/cv");

const router = express.Router();

router.get('/persons', cvController.getAllPersons);
router.get('/persons/:id', cvController.getPerson);
router.delete('/persons/:id', cvController.deletePerson);
router.post('/persons', cvController.createPerson);
router.put('/persons/:id', cvController.updatePerson);


module.exports = router;
