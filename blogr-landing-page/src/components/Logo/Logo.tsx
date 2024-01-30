import blogrLogo from "../../assets/logo.svg";
import classes from "./Logo.module.scss";
interface LogoProps {
  className?: string;
}
function Logo({ className }: LogoProps) {
  return (
    <div className={`${classes.logo} ${className ? className : ""}`}>
      <a href="/">
        <img src={blogrLogo} alt="blogr website logo" />
      </a>
    </div>
  );
}

export default Logo;
