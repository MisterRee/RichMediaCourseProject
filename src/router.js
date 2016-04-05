var controllers = require('./controllers');

var router = function(app){
	app.get("/login", controllers.Account.loginPage);
	app.post("/login", controllers.Account.login);
	app.get("/signup", controllers.Account.signupPage);
	app.post("/signup", controllers.Account.signup);
	app.get("/logout", controllers.Account.logout);
	//app.get("/main", controllers.Account.mainPage);
	app.get("/", controllers.Account.loginPage);
};

module.exports = router;