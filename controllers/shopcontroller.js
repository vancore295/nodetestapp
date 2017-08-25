(function(shopcontroller) {
    var data = require("../data");
    var shopItem = require("../models/shopitem");

    shopcontroller.init = function(app) {
        app.get("/shop", function(req, res) {
            res.render("shop", { title: "Add Shop Items" });
        });

        app.post("/addShopItem", function(req, res) {
            var newshopItem = new shopItem({

            });
            newshopItem.save();
            res.status(200).redirect("/shop");
        });

    };

})(module.exports);