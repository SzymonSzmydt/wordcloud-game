import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardButton from "../buttons/StandardButton";
import WordsList from "./WordsList";
import style from "./styles/game.module.css";

interface GameBoardProps {
  title: string;
  allWords: string[];
  goodWords: string[];
}

function GameBoard({ title, allWords, goodWords }: GameBoardProps) {
  const [selectedWords, setSelectedWords] = useState<Array<string>>([]);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleWordSelectionLogic = (word: string) => {
    if (isChecked) {
      return;
    }
    if (selectedWords.includes(word)) {
      return setSelectedWords((state) => state.filter((item) => item !== word));
    }
    if (!selectedWords.includes(word)) {
      return setSelectedWords((state) => [...state, word]);
    }
  };

  const handleFinishGame = async () => {
    const user = await JSON.parse(localStorage.getItem("user") || "");

    const goodAnswers = selectedWords.filter((word) =>
      goodWords.includes(word)
    ).length;

    const badAnswers = selectedWords.filter(
      (word) => !goodWords.includes(word)
    ).length;

    user.score =
      goodAnswers * 2 - (badAnswers + goodWords.length - goodAnswers);

    localStorage.setItem("user", JSON.stringify(user));
    return navigate("/summary", { state: user });
  };

  return (
    <>
      <section className={style.top}>
        <h1> {title}</h1>
      </section>
      <section className={style.body}>
        {allWords
          ? allWords.map((word) => (
              <WordsList
                key={word}
                word={word}
                selectedWords={selectedWords}
                isChecked={isChecked}
                goodWords={goodWords}
                handleClick={() => handleWordSelectionLogic(word)}
              />
            ))
          : null}
      </section>
      {isChecked ? (
        <StandardButton name='Finish Game' handleClick={handleFinishGame} />
      ) : (
        <StandardButton
          name='Check Answers'
          handleClick={() =>
            selectedWords.length > 0 ? setIsChecked(true) : null
          }
        />
      )}
    </>
  );
}

export default GameBoard;
