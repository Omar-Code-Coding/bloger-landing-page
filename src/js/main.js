import "../scss/main.scss";
// Images
import editorMobileImg from "../images/illustration-editor-mobile.svg";
import laptopMobileImg from "../images/illustration-laptop-mobile.svg";
import editorDesktopImg from "../images/illustration-editor-desktop.svg";
import laptopDesktopImg from "../images/illustration-laptop-desktop.svg";
import Navbar from "./navbar.js";
import Dropdown from "./dropdown.js";
import { setCardImgHandler, renderCardImg } from "./changeCardImage.js";

const navbar = new Navbar();
const navDropdown = new Dropdown(".nav");

// Set "card__img" on init
renderCardImg(
  ["img-1", "img-3"],
  [editorMobileImg, laptopMobileImg],
  [editorDesktopImg, laptopDesktopImg]
);

setCardImgHandler(
  ["img-1", "img-3"],
  [editorMobileImg, laptopMobileImg],
  [editorDesktopImg, laptopDesktopImg]
);
