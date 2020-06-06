/** Controller Methods are defined here
--Controller Methods are specific purpose methods used by routes to perform a specific task */

const Users = require("../../models/Users");
const AuthHelpers = require("../../helpers/authHelpers");
let authHelpers = new AuthHelpers();

const signup = async (req, res) => {
  let { email, username, password, userType } = req.body;
  let isValid = authHelpers.checkPasswordValidity(password);
  let user = new Users({
    email: email,
    username: username,
    userType: userType
  });
  user.password = await user.createHashPassword(password);
  if (isValid) {
    user.save()
      .then(createdUser => {
        return res.status(200).json({
          success: true,
          message: "User Created Successfully with email : " + createdUser.email
        });
      })
      .catch(error => {
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
};

const login = (req, res) => {
  let { username, password } = req.body;
  Users.findOne({
    $or: [{ username: username }, { email: username }]
  })
    .then(async user => {
      let passwordMatched = await user.comparePassword(password);
      if (passwordMatched) {
        return res.status(200).json({
          success: true,
          message: "User Logged in successfully: " + user.email
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Incorrect Username or Password"
        });
      }
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Incorrect Credentials"
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
