import { useRoveFocus } from "@ravenwaven/react-components-lib";
import { useState, useEffect, ReactNode } from "react";
import classes from "./Accordion.module.scss";

interface AccordionProps {
  className?: string;
  label: string;
  items: string[];
}

function Accordion({ className, label, items }: AccordionProps) {
  return (
    <div className={classes.accordion}>
      <a></a>
      <div>
        <ul></ul>
      </div>
    </div>
  );
}

export default Accordion;
