import { useBoardStore } from "../store/boardStore";
import Grid from "./grid";

const GameBoard = () => {
  const boardState = useBoardStore((state) => state.boardState);

  return (
    <div className="grid grid-cols-11 gap-[1px] w-fit">
      {boardState.map((row, rowId) =>
        row.map((grid, colId) => {
          return <Grid type={grid} />;
        })
      )}
    </div>
  );
};

export default GameBoard;
