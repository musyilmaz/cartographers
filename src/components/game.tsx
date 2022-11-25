import { useGameStore } from "../store/gameStore";
import GameBoard from "./board";

const GameWrapper = () => {
  const game = useGameStore();
  console.log(game);

  return (
    <div className="relative w-screen h-screen bg-stone-100">
      <GameBoard />
    </div>
  );
};

export default GameWrapper;
