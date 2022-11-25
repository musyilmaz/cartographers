import { GridState } from "../store/boardStore";

type Props = {
  type: GridState;
};

const Grid = ({ type }: Props) => {
  if (type === GridState.Mountain) {
    return <div className="w-12 h-12 bg-red-200 rounded-md" />;
  }

  if (type === GridState.Temple) {
    return <div className="w-12 h-12 bg-yellow-200 rounded-md" />;
  }

  if (type === GridState.Forest) {
    return <div className="w-12 h-12 bg-green-500 rounded-md" />;
  }

  if (type === GridState.Settlement) {
    return <div className="w-12 h-12 bg-red-500 rounded-md" />;
  }

  if (type === GridState.Fields) {
    return <div className="w-12 h-12 bg-yellow-500 rounded-md" />;
  }

  if (type === GridState.Water) {
    return <div className="w-12 h-12 bg-blue-500 rounded-md" />;
  }

  if (type === GridState.Monster) {
    return <div className="w-12 h-12 bg-purple-500 rounded-md" />;
  }

  // Case for empty grid tile
  return <div className="w-12 h-12 bg-stone-200 rounded-md" />;
};

export default Grid;
