import React, { useState, useEffect } from 'react';
import axios from 'axios'; // HTTP client for API requests

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      setError(null);
      try {
        const response = await axios.get('http://localhost:3001/api/data');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // ... rest of your React component logic to display data or handle errors

  return (
    <div>
      {/* Display data or error messages here */}
    </div>
  );
}

export default App;
