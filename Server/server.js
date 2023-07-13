// server.js
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
app.use(bodyParser.json({ type: '*/*' }));

app.post('/api/register', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await collection.findOne({ 'email': email });
    if (user) {
        res.status(409).send('Email already in use');
    } else {
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        const newUser = { email: email, password: hashedPassword, role: 'non-manager' };
        await collection.insertOne(newUser);
        res.status(201).send('Registration successful');
    }
});

app.post('/api/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await collection.findOne({ 'email': email });
    if (user && bcrypt.compareSync(password, user.password)) {
        res.json(user);
    } else {
        res.status(401).send('Authentication failed');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
