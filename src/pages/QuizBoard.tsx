import api from "../../lib/api.json";
import GameBoard from "../components/board/GameBoard";
import style from "./styles/quiz.module.css";

interface Score {
  good: string[];
  bad: string[];
}

function QuizBoard() {
  const max = api.length - 1;
  const questionNumber = Math.floor(Math.random() * (max - 0 + 1) + 0);

  return (
    <main className={style.wrapper}>
      <GameBoard
        title={api[questionNumber].question}
        goodWords={api[questionNumber].good_words}
        allWords={api[questionNumber].all_words}
      />
    </main>
  );
}

export default QuizBoard;
