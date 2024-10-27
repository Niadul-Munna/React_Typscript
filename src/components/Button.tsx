interface Props {
  children: string;
  onClick: () => void;
}
const Button = ({ children, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="bg-blue-500 px-5 py-2 max-w-max text-blue-100 font-medium  rounded-lg hover:bg-blue-800"
    >
      {children}
    </div>
  );
};

export default Button;
