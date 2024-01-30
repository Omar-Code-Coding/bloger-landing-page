import { Link } from "../UI";
import classes from "./Attribution.module.scss";

function Attribution() {
  return (
    <div className={classes.attribution}>
      Challenge by{" "}
      <Link href="https://www.frontendmentor.io?ref=challenge">
        Frontend Mentor
      </Link>
      . Coded by <Link href="#">Omar Yasser</Link>.
    </div>
  );
}

export default Attribution;
