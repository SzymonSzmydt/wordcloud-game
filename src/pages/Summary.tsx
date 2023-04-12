import { useLocation, useNavigate } from "react-router-dom";
import StandardButton from "../components/buttons/StandardButton";
import style from "./styles/summary.module.css";

function Summary() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, score } = location.state;

  const logout = () => {
    localStorage.removeItem("user");
    return navigate("/login");
  };

  return (
    <main className={style.wrapper}>
      <div>
        <section className={style.box}>
          <h1 className={style.title}>
            {score > 0 ? "Congratulations" : "Try again"}, {user} !
          </h1>
          <h2 className={style.title}> Your score: </h2>
          <h3 className={style.title}> {score} points</h3>
        </section>
        <section className={style.foot}>
          <StandardButton
            name='Try Again'
            handleClick={() => navigate("/quizboard")}
          />
          <StandardButton name='Logout' handleClick={logout} />
        </section>
      </div>
    </main>
  );
}

export default Summary;
