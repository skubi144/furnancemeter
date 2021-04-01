import React from "react";
import './styles.scss'
interface TitleProps {
  children: string;
  size?: "vvbig" | "vbig" | "big" | "normal" | "small" | "vsmall" | "vvsmall";
  color?: "orangeLight" | "orangeDark" | "blackDark" | "blackLight";
}
const Title = ({
  children,
  size = "big",
  color = "orangeDark",
}: TitleProps) => {
  return <h2 className={`title title--${size} title--${color}`}>{children}</h2>;
};
export default Title;
