import { Badge } from "@/components/ui/badge";
import { Scores } from "@/types/types";

interface ScoreBoardProps {
  scores: Scores;
}

export function ScoreBoard({ scores }: ScoreBoardProps) {
  return (
    <div className="flex justify-center gap-4">
      <Badge variant="outline" className="text-blue-600 border-blue-200">
        X: {scores.X}
      </Badge>
      <Badge variant="outline" className="text-red-600 border-red-200">
        O: {scores.O}
      </Badge>
      <Badge variant="outline" className="text-gray-600 border-gray-200">
        Draws: {scores.draws}
      </Badge>
    </div>
  );
}
