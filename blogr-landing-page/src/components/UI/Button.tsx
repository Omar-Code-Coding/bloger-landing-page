import { MouseEventHandler, ReactNode } from "react";
import classes from "./Button.module.scss";
interface ButtonProps {
  className?: string;
  type?: "primary" | "secondary" | "tertiary" | "outline" | "gradient";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

function Button({
  className,
  type = "primary",
  children,
  onClick,
}: ButtonProps) {
  const cls = `${classes.btn} ${classes[`btn-${type}`]} ${
    className ? className : ""
  }`;

  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
