import styles from "./App.module.css";
import Main from "./components/Main/Main";

export type CardType = {
  memo: string;
  date: number;
  price: number;
};
function App() {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
}

export default App;
