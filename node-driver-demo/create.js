var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("node");
  var myobj = {
    "id": 2,
    "name": "Ramesh",
    "city": "Delhi",
    "ssc_percentage": 80,
    "hsc_percentage": 90,
    "college": "DTU"
  };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });

});