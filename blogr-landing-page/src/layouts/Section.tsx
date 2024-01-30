import { ReactNode } from "react";
import classes from "./Section.module.scss";

interface SectionProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}

function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={`${id ? id : ""}`}
      className={`${classes.section} ${className ? className : ""}`}
    >
      {children}
    </section>
  );
}

export default Section;
