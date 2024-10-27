import { useState } from "react";

interface Props {
  items: string[];
  title: string;
  onChange: (item: string) => void;
}
const ListGroup = ({ items, title, onChange }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div>
        <h1>{title}</h1>
        {items.length === 0 && <p>No Items Found</p>}
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={
                selectedIndex === index
                  ? "list-decimal active:bg-red-700"
                  : "list-decimal"
              }
              onClick={() => {
                setSelectedIndex(index);
                onChange(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListGroup;
