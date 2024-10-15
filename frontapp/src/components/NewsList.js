import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the books data from the Node.js server
    const fetchBooks = async () => {
      try {
        const api = process.env.REACT_APP_NEWS_API;
        console.log(api)
        const response = await axios.get(api);
        setNews(response.data.data); // Set the books data
        setLoading(false); // Stop the loading spinner
      } catch (error) {
        console.log(error)
        setError('Error Fetching Books Data !');        
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading Data ...</div>; // Show loading while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error if any
  }


  return (
    <div>
      <h1>News List</h1>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p><strong>Source:</strong> {article.source}</p>
            <p><strong>Published At:</strong> {new Date(article.published_at).toLocaleString()}</p>
            <p><strong>Description:</strong> {article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsList



