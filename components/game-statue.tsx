import { GameResult } from "@/types/types";

interface GameStatusProps {
  gameResult: GameResult;
  isXNext: boolean;
}

export function GameStatus({ gameResult, isXNext }: GameStatusProps) {
  const getStatusMessage = () => {
    if (gameResult === "draw") return "It's a draw!";
    if (gameResult) return `🎉 Player ${gameResult} wins!`;
    return `Next player: ${isXNext ? "X" : "O"}`;
  };

  return <span className="text-lg">{getStatusMessage()}</span>;
}
