import "../scss/main.scss";
// Images
import editorMobileImg from "../images/illustration-editor-mobile.svg";
import laptopMobileImg from "../images/illustration-laptop-mobile.svg";
import editorDesktopImg from "../images/illustration-editor-desktop.svg";
import laptopDesktopImg from "../images/illustration-laptop-desktop.svg";
import Navbar from "./navbar";
import Dropdown from "./dropdown";
import { changeCardImgOnResize, setCardImg } from "./changeCardImage.js";

const navbar = new Navbar();
const navDropdown = new Dropdown();
navDropdown.setParentElement(".nav");

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
