import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpendedText = ({ children, maxChars = 100 }: Props) => {
  const [isExpended, setExpended] = useState(false);
  const text = isExpended ? children : children.substring(0, maxChars);
  if (children.length <= maxChars) return <p>{text}</p>;
  return (
    <div>
      {text}...{" "}
      <button
        onClick={() => {
          setExpended(!isExpended);
        }}
      >
        {isExpended ? "less" : "more"}
      </button>
    </div>
  );
};

export default ExpendedText;
