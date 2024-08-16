import React from 'react';
import NewsHeadlines from './components/NewsHeadlines';

// Main application component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>News Website</h1>
      </header>
      <main>
        {/* Render the NewsHeadlines component */}
        <NewsHeadlines />
      </main>
    </div>
  );
}

export default App;
