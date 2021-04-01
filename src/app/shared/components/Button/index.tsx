import React from "react";
import "./styles.scss";
interface ButtonProps {
  children: React.ReactNode | string;
  onClick: Function;
  classList: Array<string>;
}
const Button = ({ children, onClick, classList }: ButtonProps) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button className={`btn ${classList.join(" ")}`} onClick={handleClick}>
      {children}
    </button>
  );
};
export default Button;
