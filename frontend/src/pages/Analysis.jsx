import React, { useState, useEffect } from 'react';

function Analysis() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/');
      if (!response.ok) {
        throw new Error(`Failed to fetch images: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setImages(data.images);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  
  function getCustomLabel(imageName) {
    switch (imageName) {
      case 'history_treatment_willingness.png':
        return 'Comparison of Willingness Scores by Treatment History';
      case 'resources_and_awareness.png':
        return 'Proportions of Employee Awareness of Care Options Across Workplace Resource Scores';
      case 'resources_willingness_regplot.png':
        return 'Regression Plot for Relationship between Workplace Resources Score and Willingness Score';
      case 'resources_willingness.png':
        return 'Average Willingness Score by Workplace Resources Category';
      case 'work_interfere_willingness.png':
        return 'Willingness Score by Work Interference';
      case 'workplace_resources_hist.png':
        return 'Histogram for Distribution of Workplace Resources Scores';
      default:
        return imageName;
    }
  }
  return (
    <div>
      <h1 className='items-center text-center text-2xl text-slate-700 lora-font'>Data Analysis</h1>
      <div className='flex flex-wrap justify-center ml-10'>
        {images.map((image, index) => (
          <div key={index} className='w-1/2 p-2 flex flex-col items-center'>
            <img src={`data:image/png;base64,${image.data}`} alt={image.name} className='max-w-full h-auto' style={{ margin: 'auto' }} />
            <h3 className="text-center sedan-regular">{getCustomLabel(image.name)}</h3>
          </div>
        ))}
      </div>
    </div>
  );
  
 
  
}

export default Analysis;

