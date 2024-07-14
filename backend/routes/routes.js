const express = require("express");
const router = express.Router();

const {loginUser} = require("../controllers/loginUser");
const {signupUser} = require("../controllers/signupUser");
const {loginContributer} = require("../controllers/loginContributer");
const {signupContributer} = require("../controllers/signupContributer");
const {verifyOTP, verifyLoginOTP} = require("../controllers/otp");
//const {create, view, auth} = require("../protected/authB");

router.post("/verifyOTP", verifyOTP);
router.post("/verifyLoginOTP", verifyLoginOTP);
router.post("/loginUser", loginUser);
router.post("/signupUser", signupUser);
router.post("/loginContributer", loginContributer);
router.post("/signupContributer", signupContributer);

//router.delete("/remove/:Id", auth, remove);
//router.post("/create", auth, create);
//router.get("/view", auth, view);

module.exports = router;