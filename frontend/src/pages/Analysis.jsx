import React, { useState, useEffect } from 'react';

function Analysis() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:5000/');
      if (!response.ok) {
        throw new Error(`Failed to fetch images: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setImages(data.images);
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

