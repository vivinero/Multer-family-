// routers/famRouter.js
const express = require("express");
const router = express.Router();
const uploader = require("../utils/multer");
const { signUp } = require("../controllers/famControls");

router.post("/signup", uploader.fields([
  { name: 'fatherPicture', maxCount: 1 },
  { name: 'motherPicture', maxCount: 1 },
  { name: 'childrenPicture', maxCount: 7 },
]), signUp);

module.exports = router;
