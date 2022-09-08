import wait from "./helperFunctions";
export default class Navbar {
  #toggleBtn = document.querySelector(".navbar__toggle");
  #navbarContent = document.querySelector(".navbar__content");

  constructor() {
    // Events
    this.#toggleBtn.addEventListener("click", this.#toggleMenu.bind(this));
    window.addEventListener("resize", this.#initMenu.bind(this));
    this.#initMenu();
  }

  #initMenu() {
    const windowWidth = window.innerWidth;
    // Expand accordion for desktop size
    if (windowWidth > 1024) {
      return this.#navbarContent.classList.remove("menu-close");
    }

    // Shrink accordions into a menu for mobile size
    if (windowWidth < 1024) {
      return this.#navbarContent.classList.add("menu-close");
    }
  }

  #toggleMenu() {
    // Disable dropdown menu
    if (!this.#navbarContent.classList.contains("menu-close")) {
      return this.#closeMenu();
    }

    // Active dropdown menu
    if (this.#navbarContent.classList.contains("menu-close")) {
      return this.#openMenu();
    }
  }

  /* Active menu */
  #openMenu() {
    // 1- Activate menu
    this.#navbarContent.classList.remove("menu-close");
    this.#expandAnimation();
  }

  /* Disable menu */
  #closeMenu() {
    this.#shrinkAnimation();
    // Disable transition after the animation finishes;
    wait(300).then(() => this.#navbarContent.classList.add("menu-close"));
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
