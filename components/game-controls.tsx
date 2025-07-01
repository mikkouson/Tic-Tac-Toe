import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface GameControlsProps {
  onResetGame: () => void;
  onResetScores: () => void;
}

export function GameControls({
  onResetGame,
  onResetScores,
}: GameControlsProps) {
  return (
    <div className="flex gap-2">
      <Button
        onClick={onResetGame}
        variant="outline"
        className="flex-1 bg-transparent"
      >
        <RotateCcw className="h-4 w-4 mr-2" />
        New Game
      </Button>
      <Button onClick={onResetScores} variant="secondary" className="flex-1">
        Reset Scores
      </Button>
    </div>
  );
}
