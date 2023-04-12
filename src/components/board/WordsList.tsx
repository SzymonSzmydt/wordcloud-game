import style from "./styles/words.module.css";

interface WordsListProps {
  word: string;
  selectedWords: string[];
  isChecked: boolean;
  goodWords: string[];
  handleClick: () => void;
}

function WordsList({
  word,
  selectedWords,
  isChecked,
  goodWords,
  handleClick,
}: WordsListProps) {
  return (
    <div
      className={
        selectedWords.includes(word)
          ? style.wordSelected
          : style.wordNotSelected
      }
      onClick={handleClick}
    >
      <div
        className={
          isChecked && selectedWords.includes(word) && goodWords.includes(word)
            ? style.correct
            : isChecked &&
              selectedWords.includes(word) &&
              !goodWords.includes(word)
            ? style.wrong
            : ""
        }
      >
        {isChecked &&
        selectedWords.includes(word) &&
        goodWords.includes(word) ? (
          <p className={style.summary}>Good!</p>
        ) : isChecked &&
          selectedWords.includes(word) &&
          !goodWords.includes(word) ? (
          <p className={style.summary}> Bad!</p>
        ) : null}
        <p>{word}</p>
      </div>
    </div>
  );
}

export default WordsList;
