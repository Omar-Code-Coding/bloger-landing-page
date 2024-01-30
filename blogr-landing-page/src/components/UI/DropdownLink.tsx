import { KeyboardEvent, ReactNode, useEffect, useRef } from "react";
import classes from "./DropdownLink.module.scss";
import { Link } from ".";

interface DropdownLinkProps {
  tabIndex: -1 | 0;
  children?: ReactNode;
}

function DropdownLink({ tabIndex, children }: DropdownLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (

  );
}

export default DropdownLink;
