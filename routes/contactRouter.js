const express = require("express")
const router = express.Router()
const { getContact, deleteContact, updateContact, createContact } = require("../controllers/contactController")

router.route("/").get(getContact).post(createContact)
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)

// router.route("/").get(getContact)
// router.route("/").post(createContact)
// router.route("/:id").get(getContact)
// router.route("/:id").put(updateContact)
// router.route("/:id").delete(deleteContact)

module.exports = router