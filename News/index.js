//https://www.abibliadigital.com.br/api/books


const express = require('express');
const axios = require('axios'); // Import axios for making HTTP requests
var cors = require('cors')

const app = express();
const port = 3003;


app.use(cors())



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})


var apiURL = "http://api.mediastack.com/v1/news?access_key=72476354d30be85a28844ec5abe47d5c"


app.get('/', (req, res) => {
    res.send('Hello, world --- News Microservice 0_0!');
});

// Fetch all books from the external API
app.get('/news', async (req, res) => {
  try {
    const response = await axios.get(apiURL);
    const books = response.data; // Extract data from the response
    res.json(books); // Send the books data as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching books data');
  }
});