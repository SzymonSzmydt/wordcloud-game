import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardButton from "../buttons/StandardButton";
import style from "./styles/login.module.css";

function LoginForm() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nickname = data.get(`nickname`) as string;

    if (nickname.length >= 3) {
      localStorage.setItem("user", JSON.stringify({ user: nickname }));
      return navigate("quizboard");
    }

    if (nickname.length < 3) {
      return setError("The nickname is to short!");
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className={style.form}>
      <input
        type='text'
        name='nickname'
        minLength={3}
        required
        placeholder='Enter your nickname here...'
      />
      <p className={style.error}> {error} </p>
      <StandardButton name='play' />
    </form>
  );
}

export default LoginForm;
