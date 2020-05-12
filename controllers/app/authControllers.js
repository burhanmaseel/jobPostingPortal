/** Controller Methods are defined here
--Controller Methods are specific purpose methods used by routes to perform a specific task */

const Users = require("../../models/Users");
const AuthHelpers = require("../../helpers/authHelpers");
let authHelpers = new AuthHelpers();
//import { createError } from "../utils/appUtils";
//import authHelpers from "../helpers/authHelpers";

//A basic controller to signup a new user
const signup = (req, res) => {
  let { email, username, password, userType } = req.body;
  let isValid = authHelpers.checkPasswordValidity(password);
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
        console.log(error);
        return res.status(500).json({
          success: false,
          message: error.code == 11000 ? "User Already Exist" : "Internal Server Error"
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

const login = (req, res) => {
  let { username, password } = req.body;
  Users.findOne({
    $and: [
      { $or: [{ username: username }, { email: username }] },
      { password: password }
    ]
  })
    .then(user => {
      console.log(user);
      return res.status(200).json({
        success: true,
        message: "User Logged in successfully: " + user.email
      });
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Incorrect Password"
      });
    });
};

//Test function
const testClasses = () => {
  console.log('in Test Classes function');
  authHelpers.print();
}

//You export all the required funtions of the file from here
module.exports = {
  signup,
  login,
  testClasses
};
