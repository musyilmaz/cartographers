/**
 * Board store contains current state of the game board
 * boardState <Enum(Grid)[][]>
 * - 0         Empty Grid
 * - 1         Mountain Grid
 * - 2         Temple Grid
 * - 3         Forest Grid
 * - 4         Settlement Grid
 * - 5         Fields Grid
 * - 6         Water Grid
 * - 7         Monster Grid
 */

import create from "zustand";
import { COLUMN_COUNT, ROW_COUNT } from "../constants/constants";

export enum GridState {
  Empty = 0,
  Mountain = 1,
  Temple = 2,
  Forest = 3,
  Settlement = 4,
  Fields = 5,
  Water = 6,
  Monster = 7,
}

export enum MapTypes {
  Basic = "basic",
}

export type TBoardStore = {
  boardState: GridState[][];
};

const createEmptyGameBoard = () => {
  return [...Array(ROW_COUNT)].map(() =>
    Array(COLUMN_COUNT).fill(GridState.Empty)
  );
};

const initiateGameBoardState = (type: MapTypes) => {};

export const useBoardStore = create<TBoardStore>((set) => ({
  boardState: createEmptyGameBoard(),
}));
