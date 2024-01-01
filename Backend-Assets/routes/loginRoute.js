const express = require("express");
const {signup,signin,refreshAccessTokenController} = require("../controllers/userController.js");
const { userAuth, checkRole} = require("../middleware/requireAuth.js");
const { validateUser, validateSignInUser } = require("../utils/userValidation.js");

const router = express.Router();

router.post("/signup", validateUser, signup);
router.post("/signin", validateSignInUser, signin);
router.post("/refresh", refreshAccessTokenController);



router.get("/test", userAuth, checkRole(['mentor','mentee']), (req, res) => {
    console.log("testing" , req);
    res.send("Access Granted");
});


module.exports = router;