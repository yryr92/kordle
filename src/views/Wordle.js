import React, { useState, useEffect } from 'react';

const secretWord = "react"; // 정답 단어

const Wordle = () => {
  const [userInput, setUserInput] = useState(""); // 사용자 입력
  const [attempts, setAttempts] = useState(0); // 시도 횟수
  const [feedback, setFeedback] = useState({ correctLetters: 0, correctPositions: 0 }); // 피드백

  useEffect(() => {
    // 사용자 입력이 변경될 때마다 피드백을 계산
    const result = checkWord(userInput, secretWord);
    setFeedback(result);

    // 정답을 맞추면 알림 후 게임 재시작
    if (result.correctPositions === secretWord.length) {
      alert(`축하합니다! 정답을 맞췄습니다. 시도 횟수: ${attempts + 1}`);
      resetGame();
    }
  }, [userInput, attempts]);

  const checkWord = (userWord, secretWord) => {
    const result = { correctLetters: 0, correctPositions: 0 };

    for (let i = 0; i < secretWord.length; i++) {
      if (userWord[i] === secretWord[i]) {
        result.correctPositions++;
      } else if (secretWord.includes(userWord[i])) {
        result.correctLetters++;
      }
    }

    return result;
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempts(attempts + 1);
  };

  const resetGame = () => {
    setUserInput("");
    setAttempts(0);
    setFeedback({ correctLetters: 0, correctPositions: 0 });
  };

  return (
    <div>
      <h1>Wordle 게임</h1>
      <p>시도 횟수: {attempts}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          maxLength={secretWord.length}
        />
        <button type="submit">시도</button>
      </form>
      <p>맞은 글자: {feedback.correctLetters}, 맞은 위치: {feedback.correctPositions}</p>
    </div>
  );
};

export default Wordle;
