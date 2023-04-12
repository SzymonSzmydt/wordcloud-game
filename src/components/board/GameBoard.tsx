import { useState } from "react";
import StandardButton from "../buttons/StandardButton";
import style from "./styles/game.module.css";

interface GameBoardProps {
  title: string;
  allWords: string[];
  goodWords: string[];
}

function GameBoard({ title, allWords, goodWords }: GameBoardProps) {
  const [selectedWords, setSelectedWords] = useState<Array<string>>([]);

  const handleWordSelectionLogic = (word: string) => {
    if (selectedWords.includes(word)) {
      return setSelectedWords((state) => state.filter((item) => item !== word));
    }
    if (!selectedWords.includes(word)) {
      return setSelectedWords((state) => [...state, word]);
    }
  };

  return (
    <>
      <section className={style.top}>
        <h1> {title}</h1>
      </section>
      <section className={style.body}>
        {allWords
          ? allWords.map((word) => (
              <div
                className={
                  selectedWords.includes(word)
                    ? style.wordSelected
                    : style.wordNotSelected
                }
                onClick={() => handleWordSelectionLogic(word)}
              >
                <p>{word}</p>
                <p> </p>
              </div>
            ))
          : null}
      </section>
      <StandardButton name='Sprawdź' />
    </>
  );
}

export default GameBoard;
