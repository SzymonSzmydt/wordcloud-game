import LoginForm from "../components/forms/LoginForm";
import style from "./styles/login.module.css";

function Login() {
  return (
    <main className={style.wrapper}>
      <section className={style.box}>
        <h1>Wordcloud Game</h1>
        <LoginForm />
      </section>
    </main>
  );
}

export default Login;
