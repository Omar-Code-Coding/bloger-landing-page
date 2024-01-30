import classes from "./Heading.module.scss";

function Heading() {
  return (
    <div className={classes.heading}>
      <h1 className={classes["heading__main"]}>A modern publishing platform</h1>
      <p className={classes["heading__sub"]}>
        Grow your audience and build your online brand
      </p>
    </div>
  );
}

export default Heading;
