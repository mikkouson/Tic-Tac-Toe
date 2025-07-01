"use client";

import { GameBoard } from "@/components/game-board";
import { GameControls } from "@/components/game-controls";
import { GameStatus } from "@/components/game-statue";
import { ScoreBoard } from "@/components/score-board";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WinnerDisplay } from "@/components/winner-display";
import { useGameState } from "@/hooks/game-state";

export default function TicTacToe() {
  const {
    board,
    isXNext,
    gameResult,
    winningLine,
    scores,
    handleSquareClick,
    resetGame,
    resetScores,
  } = useGameState();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tic Tac Toe
          </CardTitle>
          <CardDescription>
            <GameStatus gameResult={gameResult} isXNext={isXNext} />
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Game Board */}
          <div className="flex justify-center">
            <GameBoard
              squares={board}
              onSquareClick={handleSquareClick}
              winningLine={winningLine}
            />
          </div>

          {/* Score Board */}
          <ScoreBoard scores={scores} />

          {/* Winner Display */}
          <WinnerDisplay gameResult={gameResult} />

          {/* Control Buttons */}
          <GameControls onResetGame={resetGame} onResetScores={resetScores} />
        </CardContent>
      </Card>
    </div>
  );
}
