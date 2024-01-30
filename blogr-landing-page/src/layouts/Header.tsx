import { ReactNode } from "react";
import classes from "./Header.module.scss";

interface HeaderProps {
  children?: ReactNode;
}

function Header({ children }: HeaderProps) {
  return <header className={classes.header}>{children}</header>;
}

export default Header;
