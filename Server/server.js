const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser')
var dao = require("./mongo-dao");
const mongodb = require("mongodb"); 
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "final_project";
const collectionName = "users"
let collection;

async function startup() {
    let client = new MongoClient(url);
    await client.connect();
    var db = client.db(dbName)
    collection = db.collection(collectionName);
}
startup();

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.post('/api/login', async (req, res) => {
    const email = req.body.email;
    const user = await collection.findOne({ 'email': email });
    console.log (req.body,email,user)
    if (user) {
        res.json(user);
    } else {
        res.status(401).send();
    }
});

app.get('/test', (req, res) => {
    dao.findAllTest(
        (data) => {
            if (!data) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
