(function(maincontroller) {
    var data = require("../data");

    maincontroller.init = function(app) {
        app.get("/", function(req, res) {
            res.render("index", { titlle: "Hello World" });
        });

    }
})(module.exports);