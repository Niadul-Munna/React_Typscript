import { ReactNode } from "react";
import Button from "./Button";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="bg-blue-600 p-5 text-white font-medium text-lg text-center hover:bg-blue-700">
      {children}
      <Button onClick={onClose}>X</Button>
    </div>
  );
};

export default Alert;
