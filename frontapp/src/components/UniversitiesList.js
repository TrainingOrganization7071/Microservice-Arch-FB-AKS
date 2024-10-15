import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UniversitiesList = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the books data from the Node.js server
    const fetchBooks = async () => {
      try {
        const api = process.env.REACT_APP_UNIVERSITIES_API;
        console.log(api)
        const response = await axios.get(api);
        setUniversities(response.data); // Set the books data
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
      <h1>UNIVERSITIES List</h1>
      <table>
        <thead>
          <tr>
            <th>University Name</th>
            <th>Country</th>
            <th>State/Province</th>
            <th>Domain</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((university, index) => (
            <tr key={index}>
              <td>{university.name}</td>
              <td>{university.country}</td>
              <td>{university['state-province'] || 'N/A'}</td>
              <td>{university.domains[0]}</td>
              <td>
                <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UniversitiesList


