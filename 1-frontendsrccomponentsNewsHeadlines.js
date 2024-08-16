import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Functional component to fetch and display news headlines
const NewsHeadlines = () => {
  const [headlines, setHeadlines] = useState([]); // State to store news headlines
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Function to fetch news headlines from the backend API
    const fetchHeadlines = async () => {
      try {
        // Make a request to the backend API endpoint
        const response = await axios.get('/api/news');
        // Update state with the fetched headlines (limit to 5)
        setHeadlines(response.data.articles.slice(0, 5));
      } catch (err) {
        // Set error message if the request fails
        setError('Failed to fetch headlines. Please try again later.');
      }
    };

    fetchHeadlines(); // Call the function to fetch headlines
  }, []); // Empty dependency array means this effect runs once on mount

  // Render error message if there is an error
  if (error) return <p>{error}</p>;

  // Render the list of news headlines
  return (
    <div>
      <h2>Latest Headlines</h2>
      <ul>
        {headlines.map((article, index) => (
          <li key={index}>
            {/* Link to the article */}
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
            {/* Display source and publication date */}
            <p>Source: {article.source.name} | Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsHeadlines;

