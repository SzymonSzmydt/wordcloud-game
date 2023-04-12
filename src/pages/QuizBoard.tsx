import { useState } from "react";
import api from "../../lib/api.json";
import GameBoard from "../components/board/GameBoard";

function QuizBoard() {
  const [questionNumber, setQuestionNumber] = useState(0);

  return (
    <>
      <GameBoard
        title={api[questionNumber].question}
        goodWords={api[questionNumber].good_words}
        allWords={api[questionNumber].all_words}
      />
    </>
  );
}

export default QuizBoard;
