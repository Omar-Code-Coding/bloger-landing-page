import { Button, Logo, Nav, NavMenu } from "../components";
import { Dropdown } from "../components/UI";
import { randKey } from "../utils";
import classes from "./Navbar.module.scss";
interface NavbarProps {
  navItems: { [key: string]: string[] };
}

function Navbar({ navItems }: NavbarProps) {
  return (
    <nav className={classes.navbar}>
      <Logo />
      <div className={classes["navbar__content"]}>
        <Nav>
          {Object.entries(navItems).map(([title, items]) => (
            <li key={randKey()}>
              <Dropdown title={title} items={items} />
            </li>
          ))}
        </Nav>
        <div>
          <Button type="secondary">Login</Button>
          <Button type="primary" className={classes["navbar__sign-btn"]}>
            Sign Up
          </Button>
        </div>
      </div>

      {/* Show for smaller screens */}
      <div className={classes["navbar__nav-menu"]}>
        <NavMenu>
          <li>
            <Nav>
              {Object.entries(navItems).map(([title, items]) => (
                <li key={randKey()}>
                  <Dropdown title={title} items={items} />
                </li>
              ))}
            </Nav>
          </li>
          <li>
            <div className={classes["navbar__sign-up"]}>
              <Button type="tertiary">Login</Button>
              <Button type="gradient">Sign Up</Button>
            </div>
          </li>
        </NavMenu>
      </div>
    </nav>
  );
}

export default Navbar;
