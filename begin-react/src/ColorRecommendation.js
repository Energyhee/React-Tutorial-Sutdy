import React, { useState } from 'react';

const ColorRecommendation = () => {
  const [mbti, setMbti] = useState('');
  const [recommendedColor, setRecommendedColor] = useState('');

  const mbtiColorMap = {
    ISTJ: 'Red',
    ISFJ: 'Orange',
    INFJ: 'Yellow',
    INTJ: 'Green',
    ISTP: 'Blue',
    ISFP: 'Indigo',
    INFP: 'Violet',
    INTP: 'Pink',
    ESTP: 'Black',
    ESFP: 'White',
    ENFP: 'Gray',
    ENTP: 'Brown',
    ESTJ: 'Silver',
    ESFJ: 'Gold',
    ENFJ: 'Copper',
    ENTJ: 'Bronze',
  };

  const mbtiOptions = Object.keys(mbtiColorMap);

  const handleMbtiChange = (event) => {
    setMbti(event.target.value);
  };

  const handleRecommendColor = () => {
    const randomIndex = Math.floor(Math.random() * mbtiOptions.length);
    const randomMbti = mbtiOptions[randomIndex];
    const color = mbtiColorMap[randomMbti];
    setRecommendedColor(color);
  };

  const sample = {
    display: 'inline-block',
    width: '26px',
    height: '12px',
    backgroundColor: recommendedColor
  }

  return (
    <div>
      <label htmlFor="mbtiInput">Enter your MBTI:</label>
      <input id="mbtiInput" type="text" value={mbti} onChange={handleMbtiChange} />
      <button onClick={handleRecommendColor}>Recommend Color</button>
      {recommendedColor && <p>Recommended Color: {recommendedColor}<span style={sample}></span></p>}
    </div>
  );
}

export default ColorRecommendation;
