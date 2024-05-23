const express = require("express");



router.get("/users", userController.read);
router.post("/users", userController.create);


module.exports = router;