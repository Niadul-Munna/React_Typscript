import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
    onClick();
  };
  return (
    <div>
      {state ? (
        <GoHeartFill size={40} color="red" onClick={toggle} />
      ) : (
        <GoHeart size={40} onClick={toggle} />
      )}
    </div>
  );
};

export default Like;
