(function(controllers) {
    var maincontroller = require("./maincontroller");
    var menucontroller = require("./menucontroller");
    controllers.init = function(app) {
        maincontroller.init(app);
        menucontroller.init(app);
    }
})(module.exports);