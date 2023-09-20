import "../scss/main.scss";
// Images
import editorMobileImg from "../images/illustration-editor-mobile.svg";
import laptopMobileImg from "../images/illustration-laptop-mobile.svg";
import editorDesktopImg from "../images/illustration-editor-desktop.svg";
import laptopDesktopImg from "../images/illustration-laptop-desktop.svg";
import Navbar from "./navbar.js";
import Dropdown from "./dropdown.js";
import { renderCardImg } from "./changeCardImage.js";

const navbar = new Navbar();

const dropdowns = [...document.querySelectorAll(".dropdown")].map(
  (d) => new Dropdown(d)
);
console.log(dropdowns);

// const navDropdown = new Dropdown(".nav");
// Set "card__img" on init
renderCardImg(1200, ["img-1", "img-3"], [editorDesktopImg, laptopDesktopImg]);
renderCardImg(0, ["img-1", "img-3"], [editorMobileImg, laptopMobileImg]);

// prettier-ignore
["load", "resize"].forEach((event) =>
  window.addEventListener(event, () => {
    renderCardImg(0, ["img-1", "img-3"], [editorMobileImg, laptopMobileImg]);
    renderCardImg(1200,["img-1", "img-3"],[editorDesktopImg, laptopDesktopImg]
    );
  })
);
