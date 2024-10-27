interface Props {
  cartItems: string[];
  onClear: () => void;
  onRemove: () => void;
}
const Cart = ({ cartItems, onClear, onRemove }: Props) => {
  return (
    <>
      <div className="text-xl">Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li onClick={onRemove} key={item}>
            {item}
          </li>
        ))}
      </ul>
      <button onClick={onClear} className="border-2 bg-orange-400 ">
        Remove
      </button>
    </>
  );
};

export default Cart;
