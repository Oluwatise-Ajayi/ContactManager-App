const express = require("express");
const router = express.Router();
const { getContact, createContact, getOneContact, updateContact, deleteContact } = require("../controllers/contactControllers");
const { body } = require("express-validator");

router.route("/")
    .get(getContact)
    .post(
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Valid email is required"),
        body("phone").notEmpty().withMessage("Phone number is required"),
        createContact
    );

router.route("/:id")
    .get(getOneContact)
    .put(updateContact)
    .delete(deleteContact);


router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getOneContact).put(updateContact).delete(deleteContact);

module.exports = router;
