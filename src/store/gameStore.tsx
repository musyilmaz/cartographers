/**
 * Game store contains state variables for the game main logic
 * gameState <Enum(GameState)>
 *  - Init             Main configuration for initializing game
 *  - SeasonInit       State that determines when a new season is starting
 *  - A                Game is on Season A
 *  - B                Game is on Season B
 *  - C                Game is on Season C
 *  - D                Game is on Season D
 *  - SeasonEnd        State that determines when a season is ended
 *  - End              Main configuration for ending game and scoring
 *
 *  score <Number>
 *  - Current score updates on every SeasonEnd
 */

import create from "zustand";

export enum GameState {
  Init,
  SeasonInit,
  A,
  B,
  C,
  D,
  SeasonEnd,
  End,
}

export type TGameStore = {
  gameState: GameState;
  score: number;
};

export const useGameStore = create<TGameStore>((set) => ({
  gameState: GameState.Init,
  score: 0,
}));
