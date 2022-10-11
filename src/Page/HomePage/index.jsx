import Calculator from "../../Components/Calculator";
import style from "./style.module.scss";

const HomePage = () => {
  return (
    <>
      <div className={style.app}>
        <header><h1>Contatore React</h1></header>
        <main>
          <Calculator />
        </main>
      </div>
    </>
  );
};

export default HomePage;
