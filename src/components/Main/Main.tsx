import { useState } from "react";
import useHouseStore from "../../zustand/store";
import Card from "../Card/Card";
import styles from "./Main.module.css";

const Main = () => {
  const { total, cards, totalAddition, cardsAddition } = useHouseStore();

  const [addition, setAddition] = useState(false); // 投稿ページの切り替え
  const [memo, setMemo] = useState("");
  const [price, setPrice] = useState(0);

  const addHandler = () => {
    cardsAddition({ memo: memo, date: Date.now(), price: price });
    totalAddition(price);
    setAddition(false);
  };
  return (
    <div className={styles.container}>
      {addition ? (
        <div className={styles.addition}>
          <p>
            メモ ：
            <input type="text" onChange={(e) => setMemo(e.target.value)} />
          </p>
          <p>
            金額 ：
            <input
              type="number"
              min="0"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </p>
          <button className={styles.formbtn} onClick={() => setAddition(false)}>
            キャンセル
          </button>
          <button className={styles.formbtn} onClick={addHandler}>
            追加する
          </button>
        </div>
      ) : (
        <>
          <h1>合計額:¥{total}</h1>
          <button className={styles.addbtn} onClick={() => setAddition(true)}>
            追加
          </button>
          {cards.map((card) => {
            return <Card key={card.date} card={card} />;
          })}
        </>
      )}
    </div>
  );
};

export default Main;
