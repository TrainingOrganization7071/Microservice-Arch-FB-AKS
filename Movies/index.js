//https://www.abibliadigital.com.br/api/books


const express = require('express');
const axios = require('axios'); // Import axios for making HTTP requests
var cors = require('cors')

const app = express();
const port = 3004;


app.use(cors())



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})


var apiURL = "https://api.themoviedb.org/3/discover/movie?api_key=e6f982ddd401b7a5a7a7184e6df5f48d"


app.get('/', (req, res) => {
    res.send('Hello, world --- Movies Microservice!');
});

// Fetch all books from the external API
app.get('/movies', async (req, res) => {
  try {
    const response = await axios.get(apiURL);
    const books = response.data; // Extract data from the response
    res.json(books); // Send the books data as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching books data');
  }
});