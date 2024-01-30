import { ReactNode, useState } from "react";
import classes from "./NavMenu.module.scss";

interface NavMenuProps {
  className?: string;
  children?: ReactNode;
}

function NavMenu({ className, children }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   if (isOpen) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // }, [isOpen]);

  return (
    <div
      role="nav-menu"
      className={`${classes["nav-menu"]} ${className ? className : ""}`}
    >
      <button
        className={`${classes["nav-menu__toggle"]} ${
          isOpen ? classes["toggle-open"] : classes["toggle-close"]
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-controls="nav-menu__content-wrapper"
      ></button>
      <div
        className={classes["nav-menu__content-wrapper"]}
        aria-expanded={isOpen}
        aria-hidden={!isOpen}
      >
        <ul className={classes["nav-menu__content"]}>{children}</ul>
      </div>
    </div>
  );
}

export default NavMenu;
