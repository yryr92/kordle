import React, { useState, useEffect } from 'react';
import '../Keyboard.css'; // 키보드 스타일을 정의한 CSS 파일

function Keyboard() {
    const [keyStates, setKeyStates] = useState(Array(24).fill(false));

  const keyboardLayout = [
    ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ'],
    ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'],
    ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ']
  ];

  let lengthArr = [0, 9, 18];

  useEffect(() => {
        
      }, [keyStates])

  const handleKeyClick = (index, rowIndex) => {
    let arrIndex = index + rowIndex
   
    console.log(arrIndex);

    const updatedKeyStates = [...keyStates];
    updatedKeyStates[arrIndex] = !updatedKeyStates[arrIndex];
    setKeyStates(updatedKeyStates);

  };

  const renderKeys = () => {
  
  let keyIndex = 0;

  return keyboardLayout.map((row, rowIndex) => (
    <div key={rowIndex} className="keyboard-row">
      {row.map((key, keyIndex) => (
        <div
          key={keyIndex}
          className={`keyboard-key ${keyStates[keyIndex + lengthArr[rowIndex]] ? 'active-key' : ''}`}
          onClick={() => handleKeyClick(keyIndex++, lengthArr[rowIndex])}
        >
          {key}{keyIndex}
        </div>
      ))}
    </div>
  ));
};

  return <div className="keyboard">{renderKeys()}</div>;
}


export default Keyboard