const mongodb = require("mongodb"); // mongo client library  
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "final_project";
const collectionName = "projects"
let collection;

async function startup() {
    let client = new MongoClient(url);
    await client.connect();
    var db = client.db(dbName)
    collection = db.collection(collectionName);
}
startup();

// retrieve all books
module.exports.findAllTest = function (callback) {
    let dataPromise = collection.find({}).toArray();
    dataPromise.then((books) => callback(books));
};