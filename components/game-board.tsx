import { Board } from "@/types/types";
import { Square } from "./square";

interface GameBoardProps {
  squares: Board;
  onSquareClick: (index: number) => void;
  winningLine: number[] | null;
}

export function GameBoard({
  squares,
  onSquareClick,
  winningLine,
}: GameBoardProps) {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onSquareClick(index)}
          isWinning={winningLine?.includes(index) || false}
        />
      ))}
    </div>
  );
}
