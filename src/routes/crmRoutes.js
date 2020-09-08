const express = require("express");
router = express.Router();

router
  .route("/contact")
  .get((req, res) => {
    res.send("request get successfully");
  })
  .post((req, res) => {
    res.send("request post successfully");
  });

router
  .route("/contact/:idContact")
  .put((req, res) => {
    res.send("request put successfully");
  })
  .delete((req, res) => {
    res.send("request delete successfully");
  });

module.exports = router;
