import { Board, GameResult, Scores } from "@/types/types";
import { checkWinner, triggerConfetti } from "@/utilts/utils.";
import { useState, useEffect } from "react";

export function useGameState() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameResult, setGameResult] = useState<GameResult>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [gameCount, setGameCount] = useState(0);
  const [scores, setScores] = useState<Scores>({ X: 0, O: 0, draws: 0 });

  useEffect(() => {
    const { winner: gameWinner, line } = checkWinner(board);

    if (gameWinner) {
      setGameResult(gameWinner);
      setWinningLine(line);
      setScores((prev) => ({
        ...prev,
        [gameWinner]: prev[gameWinner] + 1,
      }));
      triggerConfetti();
    } else if (board.every((square) => square !== null)) {
      setGameResult("draw");
      setScores((prev) => ({
        ...prev,
        draws: prev.draws + 1,
      }));
    }
  }, [board]);

  const handleSquareClick = (index: number) => {
    if (board[index] || gameResult) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameResult(null);
    setWinningLine(null);
    setGameCount((prev) => prev + 1);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0, draws: 0 });
    resetGame();
  };

  return {
    board,
    isXNext,
    gameResult,
    winningLine,
    gameCount,
    scores,
    handleSquareClick,
    resetGame,
    resetScores,
  };
}
