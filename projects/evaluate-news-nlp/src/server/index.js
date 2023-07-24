const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`) // remove this after you've confirmed it is working

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    const formdata = new FormData();
formdata.append("key", process.env.API_KEY);
formdata.append("txt", "@AmericanAir just landed - 3hours Late Flight - and now we need to wait TWENTY MORE MINUTES for a gate! I have patience but none for incompetence.");
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