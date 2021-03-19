const express = require("express");

const cvController = require("../controllers/cv");
const isAuth = require("../middelware/is-auth");

const router = express.Router();

router.get('/persons', cvController.getAllPersons);
router.get('/persons/:id', cvController.getPerson);
router.delete('/persons/:id', isAuth, cvController.deletePerson);
router.post('/persons', isAuth, cvController.createPerson);
router.put('/persons/:id', isAuth, cvController.updatePerson);


module.exports = router;
