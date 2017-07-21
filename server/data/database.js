(function(databse) {
    var mongodb = require('mongodb');
    var mongoUrl = "mongodb://test:test@localhost:27017/nodetest1?readPreference=primary";
    var theDb = null;

    databse.getDb = function(next) {
        if (!theDb) {
            //connect to database
            mongodb.MongoClient.connect(mongoUrl, function(err, db) {
                if (err) {
                    next(err, null);
                } else {
                    theDb = {
                        db: db
                            //menuitems: db.collection("MenuItems")
                    };
                    next(null, theDb);
                }
            });
        } else {
            next(null, theDb);
        }
    }
})(module.exports);