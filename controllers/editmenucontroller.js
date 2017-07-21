(function(editmenucontroller) {
    var data = require("../data");
    var menuItem = require("../models/menuitem");

    editmenucontroller.init = function(app) {
        app.get("/editmenu", function(req, res) {
            menuItem.find({}, function(err, menuitems) {
                items = menuitems;
                res.render("editmenu", { title: "End menu test", data: menuitems });
            });
        });
        app.post("/editMenuItem", function(req, res) {
            var updatedMenuItem = new menuItem({
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
            //updatedMenuItem.update({_id: req.body._id},);
            res.status(200).redirect("/editmenu");
        });
    }
})(module.exports);