import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your actual key
const UNSPLASH_API_URL = 'https://api.unsplash.com';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentQuery, setCurrentQuery] = useState('');

  // Fetch random photos on component mount
  useEffect(() => {
    fetchRandomPhotos();
  }, []);

  const fetchRandomPhotos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${UNSPLASH_API_URL}/photos/random`, {
        params: {
          count: 10,
          client_id: UNSPLASH_ACCESS_KEY,
        },
      });
      setPhotos(response.data);
      setCurrentQuery('');
    } catch (err) {
      setError('Failed to fetch photos. Please check your API key.');
      console.error('Error fetching random photos:', err);
    } finally {
      setLoading(false);
    }
  };

  const searchPhotos = async (query) => {
    if (!query.trim()) {
      fetchRandomPhotos();
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${UNSPLASH_API_URL}/search/photos`, {
        params: {
          query: query,
          per_page: 10,
          client_id: UNSPLASH_ACCESS_KEY,
        },
      });
      setPhotos(response.data.results);
      setCurrentQuery(query);
    } catch (err) {
      setError('Failed to search photos. Please try again.');
      console.error('Error searching photos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchPhotos(searchQuery);
  };

  const handleQuickSearch = (query) => {
    setSearchQuery(query);
    searchPhotos(query);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📸 React Photo Gallery</h1>
        <p>Discover beautiful photos from Unsplash</p>
      </header>

      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for photos (e.g., cats, nature, cars)..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            🔍 Search
          </button>
        </form>

        <div className="quick-search">
          <span>Quick search: </span>
          {['cars', 'flowers', 'boats', 'nature', 'cats', 'architecture'].map((tag) => (
            <button
              key={tag}
              onClick={() => handleQuickSearch(tag)}
              className="tag-button"
            >
              {tag}
            </button>
          ))}
        </div>

        <button onClick={fetchRandomPhotos} className="random-button">
          🎲 Random Photos
        </button>
      </div>

      {currentQuery && (
        <div className="current-search">
          Showing results for: <strong>"{currentQuery}"</strong>
        </div>
      )}

      {loading && <div className="loading">Loading amazing photos... ✨</div>}

      {error && <div className="error">{error}</div>}

      <div className="gallery">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img
              src={photo.urls.small}
              alt={photo.alt_description || 'Unsplash photo'}
              className="photo-image"
              loading="lazy"
            />
            <div className="photo-overlay">
              <div className="photo-info">
                <p className="photographer">
                  📷 by{' '}
                  <a
                    href={photo.user.links.html}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="photographer-link"
                  >
                    {photo.user.name}
                  </a>
                </p>
                <a
                  href={photo.links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-on-unsplash"
                >
                  View on Unsplash
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {photos.length === 0 && !loading && !error && (
        <div className="no-results">
          No photos found. Try a different search term!
        </div>
      )}

      <footer className="footer">
        <p>
          Powered by{' '}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
            Unsplash API
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;