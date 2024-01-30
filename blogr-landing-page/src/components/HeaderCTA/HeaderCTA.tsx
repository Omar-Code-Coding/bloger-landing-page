import { Button } from "..";
import classes from "./HeaderCTA.module.scss";

function HeaderCTA() {
  return (
    <div className={classes["header-cta"]}>
      <Button type="primary">Start for Free</Button>
      <Button type="outline">Learn More</Button>
    </div>
  );
}

export default HeaderCTA;
