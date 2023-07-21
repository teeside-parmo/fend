const dotenv = require('dotenv');
//configure env files
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// Require the Aylien npm package
var aylien = require("aylien_textapi");

app.get('/test', function (req, res) {
    const formdata = new FormData();
formdata.append("key", process.env.API_KEY);
formdata.append("txt", "This is a test, I repeat a test.");
formdata.append("lang", "en");  // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  .then(response => (response.json()))
  .then(data => {
    // Process the data received from the API
    res.send(data); // Send the data as the response
  })
  .catch(error => {
    console.log('Error:', error);
    res.status(500).send('An error occurred'); // Send an error response if something goes wrong
  });
})

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
  console.log('Example app listening on port 8082!')
})