const express = require('express'); 
const axios = require('axios'); 
const cache = require('memory-cache'); 
const app = express(); 
const PORT = 3000; 

// Define route to fetch news headlines
app.get('/api/news', async (req, res) => {
  const cacheKey = 'newsHeadlines'; 
  const cachedData = cache.get(cacheKey); 

  if (cachedData) {
    // Return cached data if available
    return res.json(cachedData);
  }

  try {
    // Fetch news headlines from News API
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us', 
        
      }
    });

    const data = response.data; 
    cache.put(cacheKey, data, 60000); 
    res.json(data); 
  } catch (error) {
    // Handle errors if API request fails
    res.status(500).send('Failed to fetch headlines');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});