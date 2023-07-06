// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
const app = express();
// Start up an instance of app

/* Middleware*/
// use the express middleware for turning body and external input and coming data to be stingfied from json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// initial folder path for files
app.use(express.static("website"));

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.post('/add', async (req, res) => {
    const info = await req.body;
    projectData = info;
    res.send(projectData);
});

app.get("/all", async (req, res) => {
    if(projectData){
        res.send(projectData);
    }
});

// Setup Server
const port = 8000;

app.listen(port, _=> console.log(`listening on port ${port}`));