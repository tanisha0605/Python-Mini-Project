import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Analysis() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000', {
        headers: {
          'Content-Type': 'application/json', // Example of a custom header
          // Add more headers as needed
        }
      });
      setImages(response.data.images);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div>
      <h1>Images</h1>
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <h3>{image.name}</h3>
            <img src={`data:image/png;base64,${image.data}`} alt={image.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analysis;



