import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import BooksList from './components/BookList';
import UniversitiesList from './components/UniversitiesList';
import NewsList from './components/NewsList';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
          <ul>
            <li>
              <Link to="/Books">Books</Link>
            </li>
            <li>
              <Link to="/Universities">Universities</Link>
            </li>
            <li>
              <Link to="/News">News</Link>
            </li>
            <li>
              <Link to="/Movies">Movies</Link>
            </li>
          </ul>
        </nav>
        <div>
          {
            JSON.stringify({
              movies:  process.env.REACT_APP_MOVIES_API
            })
          }
        </div>
        <Routes>
          <Route path="/Books" element={<BooksList />} />
          <Route path="/Universities" element={<UniversitiesList/>} />
          <Route path="/News" element={<NewsList/>} />
          <Route path="/Movies" element={<MoviesList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;