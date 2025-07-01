export type Player = "X" | "O" | null;
export type GameResult = Player | "draw";
export type Board = Player[];

export interface Scores {
  X: number;
  O: number;
  draws: number;
}
