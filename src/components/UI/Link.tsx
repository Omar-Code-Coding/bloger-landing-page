import { ReactNode, forwardRef } from "react";
import classes from "./Link.module.scss";

interface LinkProps {
  children?: ReactNode;
  className?: string;
  tabIndex?: number;
  href?: string;
}

type Ref = HTMLAnchorElement;
const Link = forwardRef<Ref, LinkProps>(
  ({ className, children, tabIndex, href = "/" }, ref) => {
    return (
      <a
        className={`${classes.link} ${className ? className : ""}`}
        ref={ref}
        href={href}
        tabIndex={tabIndex}
      >
        {children}
      </a>
    );
  }
);

export default Link;
