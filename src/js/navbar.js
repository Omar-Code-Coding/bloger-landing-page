import wait from "./helperFunctions.js";
export default class Navbar {
  #toggleBtn = document.querySelector(".navbar__toggle");
  #navbarContent = document.querySelector(".navbar__content");

  constructor() {
    // Events
    this.#toggleBtn.addEventListener("click", this.#toggleMenu.bind(this));
    window.addEventListener("resize", this.#initNavbar.bind(this));
    this.#initNavbar();
  }

  #initNavbar() {
    const windowWidth = window.innerWidth;
    // Expand navbar for desktop size
    if (windowWidth > 1024) {
      return this.#navbarContent.classList.remove("menu-close");
    }

    // Shrink navbar into a menu for mobile size
    if (windowWidth < 1024) {
      this.#toggleBtnIcon("close");
      return this.#navbarContent.classList.add("menu-close");
    }
  }

  #toggleMenu() {
    // Disable navbar menu
    if (!this.#navbarContent.classList.contains("menu-close")) {
      return this.#closeMenu();
    }

    // Active navbar menu
    if (this.#navbarContent.classList.contains("menu-close")) {
      return this.#openMenu();
    }
  }

  /* Active menu */
  #openMenu() {
    // 1- Activate menu
    this.#toggleBtnIcon("open");
    this.#navbarContent.classList.remove("menu-close");
    this.#expandAnimation();
  }

  /* Disable menu */
  #closeMenu() {
    this.#toggleBtnIcon("close");
    this.#shrinkAnimation();
    // Disable transition after the animation finishes;
    wait(300).then(() => this.#navbarContent.classList.add("menu-close"));
  }

  #toggleBtnIcon(state) {
    // Set btn icon to icon-close
    if (state === "open") {
      this.#toggleBtn.classList.remove("toggle-close");
      return this.#toggleBtn.classList.add("toggle-open");
    }

    // Set btn icon to icon-hamburger
    if (state === "close") {
      this.#toggleBtn.classList.remove("toggle-open");
      return this.#toggleBtn.classList.add("toggle-close");
    }
  }

  #expandAnimation() {
    // 2- Get menu height
    const menuHeight = this.#navbarContent.clientHeight;
    // 3- Set transition
    this.#navbarContent.classList.add("closing");
    wait(1)
      .then(() => {
        // 4- Wait x amount of time to set menu height for transition to work
        this.#navbarContent.style.height = `${menuHeight}px`;
        this.#navbarContent.style.display = "";

        return wait(300);
      })
      .then(() => {
        // 5- Remove transition class
        this.#navbarContent.classList.remove("closing");
        this.#navbarContent.style = "";
      });
  }

  #shrinkAnimation() {
    const menuHeight = this.#navbarContent.clientHeight;
    // 1- Select "closing" class
    this.#navbarContent.classList.add("closing");
    const utilClass = document.querySelector(".closing");
    // 2- Set "closing" class height to menu height
    utilClass.style.height = `${menuHeight}px`;

    wait(1)
      .then(() => {
        // 3- Wait x amount of time to set height for Transition to work
        this.#navbarContent.style.height = "0px";
        return wait(300);
      })
      .then(() => {
        // 4- Remove transition class
        this.#navbarContent.classList.remove("closing");
        this.#navbarContent.style = "";
      });
  }
}
