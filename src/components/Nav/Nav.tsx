import { ReactNode } from "react";

import classes from "./Nav.module.scss";

interface NavProps {
  children?: ReactNode;
}

function Nav({ children }: NavProps) {
  return <ul className={classes.nav}>{children}</ul>;
}

export default Nav;
