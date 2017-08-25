(function(controllers) {
    var maincontroller = require("./maincontroller");
    var menucontroller = require("./menucontroller");
    var editmenucontroller = require("./editmenucontroller");
    var shopcontroller = require("./shopcontroller");

    controllers.init = function(app) {
        maincontroller.init(app);
        menucontroller.init(app);
        editmenucontroller.init(app);
        shopcontroller.init(app);
    }
})(module.exports);