import "../scss/main.scss";
// Images
import editorMobileImg from "../images/illustration-editor-mobile.svg";
import laptopMobileImg from "../images/illustration-laptop-mobile.svg";
import editorDesktopImg from "../images/illustration-editor-desktop.svg";
import laptopDesktopImg from "../images/illustration-laptop-desktop.svg";

import DropdownMenu from "./navDropdownMenu.js";
import Accordion from "./accordion.js";
import { changeCardImgOnResize, setCardImg } from "./changeCardImage.js";

const navMenu = new DropdownMenu();
const navAccordion = new Accordion();
setCardImg(
  ["img-1", "img-3"],
  [editorMobileImg, laptopMobileImg],
  [editorDesktopImg, laptopDesktopImg]
);
changeCardImgOnResize(
  ["img-1", "img-3"],
  [editorMobileImg, laptopMobileImg],
  [editorDesktopImg, laptopDesktopImg]
);
