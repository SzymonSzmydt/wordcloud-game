import style from "./styles/standard.module.css";

interface StandardButtonProps {
  handleClick?: () => void;
  name: string;
}

const StandardButton = ({ name, handleClick }: StandardButtonProps) => {
  return (
    <button onClick={handleClick} className={style.box}>
      {name}
    </button>
  );
};

export default StandardButton;
