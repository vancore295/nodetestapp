(function(controllers) {
    var maincontroller = require("./maincontroller");
    var menucontroller = require("./menucontroller");
    var editmenucontroller = require("./editmenucontroller");

    controllers.init = function(app) {
        maincontroller.init(app);
        menucontroller.init(app);
        editmenucontroller.init(app);
    }
})(module.exports);