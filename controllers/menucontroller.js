(function(menucontroller) {
    var data = require("../data");
    var menuItem = require("../models/menuitem");

    menucontroller.init = function(app) {
        app.get("/menu", function(req, res) {
            res.render("menu", { title: "Menu Test" });
        });

        app.post("/addMenuItem", function(req, res) {
            var newMenuItem = new menuItem({
                route: req.body.route,
                href: req.body.href,
                target: req.body.target,
                linkLabel: req.body.linkLabel,
                imageSource: req.body.imageSource,
                dataToggle: req.body.dataToggle,
                dataPlacement: req.body.dataPlacement,
                title: req.body.title,
                showImage: req.body.showImage || null,
                showLabel: req.body.showLabel || null
            });
            newMenuItem.save();
            res.status(200).redirect("/menu");
        });

    };

})(module.exports);