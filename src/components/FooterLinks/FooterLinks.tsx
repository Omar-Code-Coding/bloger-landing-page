import { randKey } from "../../utils";
import { Link } from "../UI";
import classes from "./FooterLinks.module.scss";

interface FooterLinksProps {
  mainLabel: string;
  labels: string[];
}

function FooterLinks({ mainLabel, labels }: FooterLinksProps) {
  return (
    <div className={classes["footer__links"]}>
      <Link className={classes["footer__links-heading"]}>{mainLabel}</Link>
      <ul className={classes["footer__links-list"]}>
        {labels.map((label) => (
          <li key={randKey()}>
            <Link>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;
