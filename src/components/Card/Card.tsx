import { CardType } from "../../App";
import useHouseStore from "../../zustand/store";
import styles from "./Card.module.css";

type CardProps = {
  card: CardType;
};
const Card = ({ card }: CardProps) => {
  const date = new Date(card.date);
  const showDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;

  const { totalSubtract, cardDeletion } = useHouseStore();

  const deleteHandler = (key: number, price: number) => {
    cardDeletion(key);
    totalSubtract(price);
  };
  return (
    <div className={styles.container}>
      <div>
        <h2>{card.memo}</h2>
      </div>
      <div className={styles.dateAndPrice}>
        <p className={styles.date}>{showDate}</p>
        <p className={styles.price}>¥{card.price}</p>
        <button
          className={styles.deletebtn}
          onClick={() => deleteHandler(card.date, card.price)}
        >
          削除
        </button>
      </div>
    </div>
  );
};

export default Card;
