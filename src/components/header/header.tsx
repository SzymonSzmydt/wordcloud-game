import style from "./styles/header.module.css";

function Header() {
  const userData = localStorage.getItem("user");
  const user = userData !== null ? JSON.parse(userData || "") : "";
  return (
    <header className={style.wrapper}>
      <section className={style.container}>
        <h1> WordCloud </h1>
        <h2> {user.user ?? null}</h2>
      </section>
    </header>
  );
}

export default Header;
