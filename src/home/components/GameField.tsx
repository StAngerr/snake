import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Game } from '../../snake-game/controllers/game.controller';

interface GameState {
  gameInstance: Game | null;
  isStarted: boolean;
}

export const GameField = () => {
  const filedRef = useRef(null);
  const [gameState, setGameState] = useState<GameState>({
    gameInstance: null,
    isStarted: false,
  });

  useEffect(() => {
    if (filedRef && !gameState.gameInstance) {
      const canvas: HTMLCanvasElement = filedRef.current;
      setGameState({
        ...gameState,
        gameInstance: new Game(canvas.getContext('2d'), canvas),
      });
    }
  }, [filedRef]);

  const startGame = useCallback(() => {
    gameState.gameInstance.startGame();
    setGameState({ ...gameState, isStarted: true });
  }, [gameState]);

  return (
    <div className="tile">
      <div className="panel">
        <h3 className="panel-heading">Snake</h3>
        <div className="panel-block">
          <canvas ref={filedRef} width="450" height="300" />
        </div>
        <div className="panel-block">
          <button disabled={gameState.isStarted || !gameState.gameInstance} className="button" onClick={startGame}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};
