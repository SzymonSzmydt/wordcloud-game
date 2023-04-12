import style from "./styles/header.module.css";

function Header() {
  const userData = localStorage.getItem("user");
  const user = userData !== null ? JSON.parse(userData || "") : "";
  return (
    <header className={style.wrapper}>
      <h1> Wordcloud </h1>
      <h2> {user.user ?? null}</h2>
    </header>
  );
}

export default Header;
