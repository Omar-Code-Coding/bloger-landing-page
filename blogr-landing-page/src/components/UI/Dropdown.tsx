import { useEffect, useRef, useState } from "react";
import classes from "./Dropdown.module.scss";
import { Link } from ".";
import { randKey } from "../../utils";
import { useRoveFocus } from "@ravenwaven/react-components-lib";

interface DropdownProps {
  className?: string;
  items: string[];
  title: string;
}

function Dropdown({ title, items, className }: DropdownProps) {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownContentRef = useRef<HTMLDivElement>(null);
  const dropdownItemsRef = useRef<HTMLAnchorElement[]>([]);
  const {
    currentFocus,
    isKeyboardActive,
    setIsKeyboardActive,
    setCurrentFocus,
  } = useRoveFocus<HTMLDivElement>({
    container: dropdownRef?.current,
    items: dropdownItemsRef?.current ?? [],
    onEnterPress: handleEnterKeyPress,
    onEscapePress: handleEscapeKeyPress,
  });

  function handleEnterKeyPress() {
    setIsActive((prev) => !prev);
  }

  function handleEscapeKeyPress() {
    setIsActive(false);
  }

  // useEffect(() => forceUpdate(true), []);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
    } else {
      setIsKeyboardActive(false);
      setCurrentFocus(-1);
      const delay =
        getTransitionDuration(dropdownContentRef.current as Element) * 1000;
      setTimeout(setIsVisible, delay, false);
    }
  }, [isActive]);

  return (
    <div
      className={`${classes.dropdown} ${className ? className : ""}`}
      role="dropdown"
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      tabIndex={0}
      ref={dropdownRef}
    >
      <a
        href="#"
        className={classes["dropdown__toggle"]}
        data-active={isActive}
        tabIndex={-1}
        aria-controls="dropdown__content"
      >
        {title}
      </a>
      <div
        className={classes["dropdown__content"]}
        onMouseOver={() => setIsActive(true)}
        ref={dropdownContentRef}
        aria-hidden={!isActive}
        aria-expanded={isActive}
      >
        {isVisible && (
          <ul className={classes["dropdown__menu"]}>
            {items.map((item, i) => (
              <li key={randKey()} className={classes["dropdown__item"]}>
                <Link
                  ref={(el) => {
                    if (el) {
                      dropdownItemsRef.current[i] = el;
                    }
                  }}
                  tabIndex={currentFocus === i && isKeyboardActive ? 0 : -1}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function getTransitionDuration(element: Element) {
  return +window
    .getComputedStyle(element)
    .getPropertyValue("transition-duration")
    .replace("s", "");
}

export default Dropdown;
