import wait from "./helperFunctions";
export default class DropdownMenu {
  #dropdownBtn = document.querySelector(".dropdown__btn");
  #dropdownContent = document.querySelector(".dropdown__content");

  constructor() {
    // Events
    this.#dropdownBtn.addEventListener("click", this.#toggleMenu.bind(this));
    window.addEventListener("resize", this.#initMenu.bind(this));
    this.#initMenu();
  }

  #initMenu() {
    const windowWidth = window.innerWidth;
    // Expand accordion for desktop size
    if (windowWidth > 1024) {
      return this.#dropdownContent.classList.remove("menu-close");
    }

    // Shrink accordions into a menu for mobile size
    if (windowWidth < 1024) {
      return this.#dropdownContent.classList.add("menu-close");
    }
  }

  #toggleMenu() {
    // Disable dropdown menu
    if (!this.#dropdownContent.classList.contains("menu-close")) {
      return this.#closeMenu();
    }

    // Active dropdown menu
    if (this.#dropdownContent.classList.contains("menu-close")) {
      return this.#openMenu();
    }
  }

  /* Active menu */
  #openMenu() {
    // 1- Activate menu
    this.#dropdownContent.classList.remove("menu-close");
    // 2- Get menu height
    const menuHeight = this.#dropdownContent.clientHeight;
    // 3- Set transition
    this.#dropdownContent.classList.add("closing");
    wait(1)
      .then(() => {
        // 4- Wait x amount of time to set menu height for transition to work
        this.#dropdownContent.style.height = `${menuHeight}px`;
        this.#dropdownContent.style.display = "";

        return wait(300);
      })
      .then(() => {
        // 5- Remove transition class
        this.#dropdownContent.classList.remove("closing");
        this.#dropdownContent.style = "";
      });
  }

  /* Disable menu */
  #closeMenu() {
    // 1- Set transition
    // -1-- Calculate menu height
    const menuHeight = this.#dropdownContent.clientHeight;
    // -2-- Add "closing" class
    this.#dropdownContent.classList.add("closing");
    // -3-- Select "closing" class
    const utilClass = document.querySelector(".closing");
    // -4-- Set "closing" class height to menu height
    utilClass.style.height = `${menuHeight}px`;

    wait(1)
      .then(() => {
        // 2- Wait x amount of time to set height for Transition to work
        this.#dropdownContent.style.height = "0px";
        return wait(300);
      })
      .then(() => {
        // 3- Remove transition class
        this.#dropdownContent.classList.remove("closing");

        // 4- Disable menu
        this.#dropdownContent.classList.add("menu-close");
        this.#dropdownContent.style = "";
      });
  }
}
