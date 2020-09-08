const express = require("express");
router = express.Router();

const crmControllers = require("../controllers/crmControllers");

router
  .route("/contact")
  .get(crmControllers.getContacts)
  .post(crmControllers.addNewContact);

router
  .route("/contact/:idContact")
  .get(crmControllers.getContactWithID)
  .put(crmControllers.updateContact)
  .delete(crmControllers.deleteContact);

module.exports = router;
