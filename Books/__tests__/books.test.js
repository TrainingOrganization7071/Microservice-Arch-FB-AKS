// __tests__/books.test.js
const request = require('supertest');
const express = require('express');
const axios = require('axios');
const booksData = require('../index'); // Assuming index.js is the main file

jest.mock('axios'); // Mock axios for unit tests

// Create an instance of the express app
const app = express();
app.use('/', booksData);

describe('Books API Microservice', () => {
  
  it('should return a welcome message at the root endpoint', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello, world <---> Books Microservice 1010!');
  });

  it('should fetch books data from the external API', async () => {
    const mockBooks = [
      { name: 'Genesis', chapters: 50 },
      { name: 'Exodus', chapters: 40 },
    ];
    
    axios.get.mockResolvedValueOnce({ data: mockBooks });
    
    const res = await request(app).get('/books');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockBooks); // Ensure the returned data matches
  });

  it('should handle errors from the external API', async () => {
    axios.get.mockRejectedValueOnce(new Error('API is down'));

    const res = await request(app).get('/books');
    expect(res.statusCode).toEqual(500);
    expect(res.text).toEqual('Error fetching books data');
  });
});




