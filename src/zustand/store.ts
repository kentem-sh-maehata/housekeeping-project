import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CardType } from "../App";

type HouseState = {
  total: number;
  cards: CardType[];
  totalAddition: (price: number) => void;
  totalSubtract: (price: number) => void;
  cardsAddition: (card: CardType) => void;
  cardDeletion: (key: number) => void;
};

const useHouseStore = create<HouseState>()(
  persist(
    (
      set: (
        partial:
          | HouseState
          | Partial<HouseState>
          | ((state: HouseState) => HouseState | Partial<HouseState>),
        replace?: boolean | undefined
      ) => void
    ) => ({
      total: 0,
      cards: [],
      totalAddition: (price: number) =>
        set((state: HouseState) => ({ total: state.total + price })),
      totalSubtract: (price: number) =>
        set((state: HouseState) => ({ total: state.total - price })),
      cardsAddition: (card: CardType) =>
        set((state: HouseState) => ({ cards: [...state.cards, card] })),
      cardDeletion: (key: number) =>
        set((state: HouseState) => ({
          cards: state.cards.filter((card) => card.date !== key),
        })),
    }),
    {
      name: "house-store",
      getStorage: () => localStorage,
    }
  )
);
export default useHouseStore;
