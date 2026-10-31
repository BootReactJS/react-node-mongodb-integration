const { signupController, signinController, loginController} = require("../controllers/authController.js")

var { Router }  = require("express");
var routeObj = Router();

routeObj.post("/sign-up", signupController);
routeObj.post("/sign-in", signinController);
routeObj.post("/sign-in", loginController);


module.exports = routeObj;