const mongodb = require("mongodb"); // mongo client library
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "final_project";
let db;

async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  db = client.db(dbName);
}
startup();

// retrieve all projects
module.exports.findAllProjects = function (callback) {
  db.collection("projects")
    .find({})
    .toArray()
    .then((projects) => callback(projects));
};

// retrive single project
module.exports.findProject = function (id, callback) {
  db.collection("projects")
    .findOne({ id: +id })
    .then((projects) => callback(projects));
};

//create a new project
module.exports.createProject = (project, callback) => {
  db.collection("projects")
    .count()
    .then((data) => {
      project.id = data;
      db.collection("projects")
        .insertOne(project)
        .then((data) => callback(data));
    });
};

//delete project
module.exports.deleteProject = function (id, callback) {
  db.collection("projects")
    .deleteOne({ id: +id })
    .then((err) => callback(err));
};

//update project
module.exports.updateProject = function (id, project, callback) {
  db.collection("projects")
    .findOneAndUpdate({ id: +id }, { $set: project })
    .then((project) => callback(project));
};
