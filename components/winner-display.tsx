import { GameResult } from "@/types/types";
import { Trophy } from "lucide-react";

interface WinnerDisplayProps {
  gameResult: GameResult;
}

export function WinnerDisplay({ gameResult }: WinnerDisplayProps) {
  if (!gameResult || gameResult === "draw") return null;

  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
        <Trophy className="h-5 w-5" />
        <span className="font-semibold">Player {gameResult} Wins!</span>
      </div>
    </div>
  );
}
