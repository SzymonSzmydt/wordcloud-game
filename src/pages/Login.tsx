import LoginForm from "../components/forms/LoginForm";
import style from "./styles/login.module.css";

function Login() {
  return (
    <div className={style.wrapper}>
      <h1>Wordcloud Game</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
