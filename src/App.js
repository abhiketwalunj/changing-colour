import { useState } from 'react';
import './App.css';

const ColorChanger = () => {
  const colors = ['Red', 'Yellow', 'Blue', 'Green', 'Brown', 'Orange', 'Gray', 'Wheat', 'Pink', 'Purple', 'Indigo', 'Violet', 'Skyblue','Maroon'];
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    document.body.style.backgroundColor = color;
    setSelectedColor(color); 
  };

  return (
    <div className="color-container">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-box"
          style={{ backgroundColor: selectedColor === color ? 'white' : color }}
          onClick={() => handleColorClick(color)}
        >
          {color}
        </div>
      ))}
    </div>
  );
};

export default ColorChanger;