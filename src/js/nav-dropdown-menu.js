import Accordion from "./accordion.js";

export default class DropdownMenu extends Accordion {
  constructor() {
    super();
    // Elements
    this.dropdownBtn = document.querySelector(".dropdown-btn");

    // Events
    window.addEventListener("resize", this._shrinkAccordion.bind(this));
    this.dropdownBtn.addEventListener("click", this._toggleMenu.bind(this));

    // Change accordion's state based on the device's viewport
    this._shrinkAccordion();
  }

  _toggleMenu() {
    const accordionContainer = this.accordionContainer;
    // Close dropdown menu
    if (!accordionContainer.classList.contains("menu-close"))
      return accordionContainer.classList.add("menu-close");

    // Open dropdown menu
    if (accordionContainer.classList.contains("menu-close"))
      return accordionContainer.classList.remove("menu-close");
  }
}
