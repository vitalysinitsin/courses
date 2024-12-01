const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPostmanPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPostmanPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
