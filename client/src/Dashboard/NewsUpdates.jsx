import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsUpdates = () => {
  const [newsUpdates, setNewsUpdates] = useState([]);

  useEffect(() => {
    const fetchNewsUpdates = async () => {
      try {
        const response = await axios.get('/api/news-updates');
        setNewsUpdates(response.data);
      } catch (error) {
        console.error('Error fetching news updates:', error);
      }
    };

    fetchNewsUpdates();
  }, []);

  return (
    <div>
      <h2>News Updates</h2>
      <ul>
        {newsUpdates.map((update, index) => (
          <li key={index}>
            <h3>Severe Weather Alerts</h3>
            <p>Blizzard Warning in Effect for Northeast, Up to 2 Feet of Snow Expected</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsUpdates;