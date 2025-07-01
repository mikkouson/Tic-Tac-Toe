import { Button } from "@/components/ui/button";
import { Player } from "@/types/types";

interface SquareProps {
  value: Player;
  onClick: () => void;
  isWinning: boolean;
}

export function Square({ value, onClick, isWinning }: SquareProps) {
  return (
    <Button
      variant="outline"
      className={`h-20 w-20 text-3xl font-bold transition-all duration-200 hover:scale-105 ${
        isWinning ? "bg-green-100 border-green-500 text-green-700" : ""
      } ${
        value === "X"
          ? "text-blue-600"
          : value === "O"
          ? "text-red-600"
          : "text-gray-400"
      }`}
      onClick={onClick}
      disabled={value !== null}
    >
      {value}
    </Button>
  );
}
