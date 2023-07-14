const cors = require("cors");
const express = require("express");
//const { spawn } = require('child_process');
const bodyParser = require("body-parser");
var dao = require("./mongo-dao");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));

//get all projects
app.get("/projects", (req, res) => {
  dao.findAllProjects((data) => {
    if (!data) {
      res.status(404).end();
    } else {
      res.send(data);
    }
  });
});

//get project by id
app.get("/projects/:id", (req, res) => {
  dao.findProject(req.params.id, (data) => {
    if (!data) {
      res.status(404).end();
    } else {
      res.send(data);
    }
  });
});

//create new project
app.post("/projects", (req, res) => {
  if (!req.body) {
    req.statusCode = 500;
    res.end();
    return;
  }
  dao.createProject(req.body, (data) => {
    if (data) {
      res.send(data);
      res.end();
    } else {
      res.status(500).send(err);
    }
  });
});

//delete project
app.delete("/projects/:id", (req, res) => {
  dao.deleteProject(req.params.id, (err) => {
    if (!err) {
      res.send("Deleted Project");
      res.end();
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

app.put("/projects/:id", (req, res) => {
  if (!req.body) {
    req.statusCode = 500;
    res.end();
    return;
  }
  dao.updateProject(req.params.id, req.body, (data) => {
    if (!data) {
      res.status(404).end();
    } else {
      res.send(data);
    }
  });
});

/*
app.post('/predict', (req, res) => {
    const data = req.body.data;

    // Spawn a child process to execute the predict.py script
    const pythonScript = spawn('python', ['predict.py']);

    // Send the data to the predict.py script via stdin
    //console.log(data)
    //console.log(JSON.stringify(data))
    pythonScript.stdin.write(JSON.stringify(data));
    pythonScript.stdin.end();

 

    let predictionData = '';

 

    // Collect the predicted data from stdout of the predict.py script
    pythonScript.stdout.on('data', (data) => {
        //console.log(data.toString())
        predictionData += data.toString();
        predictionData = predictionData.slice(0, -2)
    });

    
 

    // Handle the completion of the predict.py script
    pythonScript.on('close', (code) => {
       // console.log(code)
        if (code === 0) {
            // Parse the predicted data
            console.log({predictionData})
            const predictions = JSON.parse(predictionData);
           // console.log(predictions)
 

            // Return the predictions as the response
            res.send(predictions);
        } else {
            // Return an error response
            //console.log(code)
            res.status(500).json({ error: 'Prediction failed' });
        }
    });
});

 
*/

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
