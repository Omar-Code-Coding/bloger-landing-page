import { ReactNode } from "react";
import classes from "./Footer.module.scss";

interface FooterProps {
  children?: ReactNode;
}

function Footer({ children }: FooterProps) {
  return <footer className={classes.footer}>{children}</footer>;
}

export default Footer;
