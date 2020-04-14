/** Controller Methods are defined here
--Controller Methods are specific purpose methods used by routes to perform a specific task */

const Users = require("../models/Users");
import { checkPasswordValidity } from "../helpers/authHelpers";
import { createError } from "../utils/appUtils";

//A basic controller to signup a new user
let signup = (req, res) => {
  let { email, username, password, userType } = req.body;
  let isValid = checkPasswordValidity(password);
  if (isValid) {
    Users.create({
      email: email,
      username: username,
      password: password,
      userType: userType
    })
      .then(user => {
        return res.status(200).json({
          success: true,
          message: "User Created Successfully with email : " + user.email
        });
      })
      .catch(error => {
        return res.status(500).json({
          success: false,
          message: "Internal Server Error"
        })
      });
  } else {
    return res.status(400).json({
      success: false,
      message: "Password Invalid"
    });
  }
  //appUtils.createError();
};

//You export all the required funtions of the file from here
module.exports = {
  signup
};
