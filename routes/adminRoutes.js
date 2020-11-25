"use strict";

const router = require("express").Router(),
  adminController = require("../controllers/adminController");

router.get("/", adminController.index, adminController.indexView);
router.get("/approve", adminController.approve);


module.exports = router;