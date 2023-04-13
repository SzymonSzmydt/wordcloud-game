import { Link } from "react-router-dom";
import style from "./styles/summary.module.css";

function ErrorPage() {
  return (
    <main className={style.wrapper}>
      <h1> Błąd 404 - Szukana strona nie istnieje!</h1>
      <h2>
        Powrót na stronę główną <Link to='/'>WordCloud</Link>
      </h2>
    </main>
  );
}

export default ErrorPage;
