module.exports = app => {
    const authControllers = require("../../controllers/app/authControllers");

    //You define all the routes and request type here and connect the controller methods with each route
    app.route("/api/app/signup").post(authControllers.signup);
    app.route("/api/app/login").post(authControllers.login);
    app.route("/api/app/testClasses").get(authControllers.testClasses);

}