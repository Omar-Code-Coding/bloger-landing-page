import { ReactNode } from "react";
import classes from "./Article.module.scss";

interface ArticleProps {
  children?: ReactNode;
  className?: string;
}

function Article({ className, children }: ArticleProps) {
  return (
    <article className={`${classes.article} ${className ? className : ""}`}>
      {children}
    </article>
  );
}

type TitleVarients = "light" | "large";

interface TitleProps {
  children?: ReactNode;
  className?: string;
  varient?: TitleVarients[] | TitleVarients;
}

function Title({ children, className, varient }: TitleProps) {
  let cls = `${classes["article__title"]}`;

  if (className) {
    cls = cls.concat(" ", className);
  }
  if (varient) {
    if (Array.isArray(varient)) {
      varient.forEach(
        (v) => (cls = cls.concat(" ", `${classes[`article__title--${v}`]}`))
      );
    }
    cls = cls.concat(" ", `${classes[`article__title--${varient}`]}`);
  }

  return <h3 className={cls}>{children}</h3>;
}

interface ParagraphProps {
  children?: ReactNode;
  className?: string;
  varient?: "light";
}

function Paragraph({ children, className, varient }: ParagraphProps) {
  let cls = `${classes["article__paragraph"]}`;
  if (className) {
    cls = cls.concat(" ", className);
  }
  if (varient) {
    cls = cls.concat(" ", `${classes[`article__paragraph--${varient}`]}`);
  }
  return <p className={cls}>{children}</p>;
}

Article.Title = Title;
Article.Paragraph = Paragraph;

export default Article;
