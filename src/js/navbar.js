import wait from "./helperFunctions.js";
export default class Navbar {
  #toggleBtn = document.querySelector(".navbar__toggle");
  #navbarContentParent = document.querySelector(".navbar__content");
  #navbarContentChildren = [...this.#navbarContentParent.children];

  constructor() {
    // Events
    this.#toggleBtn.addEventListener(
      "click",
      this.#toggleMenu.bind(
        this,
        this.#navbarContentChildren,
        this.#navbarContentParent,
        this.#toggleBtn
      )
    );
    window.addEventListener(
      "resize",
      this.#initNavbar.bind(this, this.#navbarContentParent, this.#toggleBtn)
    );
    this.#initNavbar(this.#navbarContentParent, this.#toggleBtn);
  }

  #initNavbar(navbarContentParent, toggleBtn) {
    const windowWidth = window.innerWidth;
    // Expand navbar for desktop size
    if (windowWidth > 1024) {
      return navbarContentParent.classList.remove("menu-close");
    }

    // Shrink navbar into a menu for mobile size
    if (windowWidth < 1024) {
      this.#toggleBtnIcon("close", toggleBtn);
      return navbarContentParent.classList.add("menu-close");
    }
  }

  #toggleMenu(navbarContentChildren, navbarContentParent, toggleBtn) {
    // Disable navbar menu
    if (!navbarContentParent.classList.contains("menu-close")) {
      return this.#closeMenu(
        navbarContentChildren,
        navbarContentParent,
        toggleBtn
      );
    }

    // Active navbar menu
    if (navbarContentParent.classList.contains("menu-close")) {
      return this.#openMenu(
        navbarContentChildren,
        navbarContentParent,
        toggleBtn
      );
    }
  }

  /* Active menu */
  #openMenu(navbarContentChildren, navbarContentParent, toggleBtn) {
    // 1- Activate menu
    this.#toggleBtnIcon("open", toggleBtn);
    navbarContentParent.classList.remove("menu-close");
    this.#animationExpand(navbarContentChildren, navbarContentParent);
  }

  /* Disable menu */
  #closeMenu(navbarContentChildren, navbarContentParent, toggleBtn) {
    this.#toggleBtnIcon("close", toggleBtn);
    this.#animationCollapse(navbarContentChildren, navbarContentParent);
    // Disable transition after the animation finishes;
    wait(300).then(() => navbarContentParent.classList.add("menu-close"));
  }

  #toggleBtnIcon(state, toggleBtn) {
    // Set btn icon to icon-close
    if (state === "open") {
      toggleBtn.classList.remove("toggle-close");
      return toggleBtn.classList.add("toggle-open");
    }

    // Set btn icon to icon-hamburger
    if (state === "close") {
      toggleBtn.classList.remove("toggle-open");
      return toggleBtn.classList.add("toggle-close");
    }
  }

  #calcElementsHeight(elementS) {
    return elementS
      .map((element) => {
        return Number(
          window
            .getComputedStyle(element)
            .getPropertyValue("height")
            .replace("px", "")
            .trimEnd()
        );
      })
      .reduce((previousElement, currentElement) => {
        return previousElement + currentElement;
      });
  }

  #animationExpand(navbarContentChildren, navbarContentParent) {
    // 1- Get menu height
    let menuRowGap = Number(
      window
        .getComputedStyle(this.#navbarContentParent)
        .getPropertyValue("row-gap")
        .replace("px", "")
        .trimEnd()
    );
    let menuHeight =
      this.#calcElementsHeight(navbarContentChildren) + menuRowGap;

    // 2- Set transition
    navbarContentParent.classList.add("closing");
    wait(1)
      .then(() => {
        // 3- Wait x amount of time to set menu height for transition to work
        navbarContentParent.style.height = `${menuHeight}px`;
        navbarContentParent.style.display = "";

        return wait(250);
      })
      .then(() => {
        // 4- Remove transition class
        navbarContentParent.classList.remove("closing");
        navbarContentParent.style = "";
      });
  }

  #animationCollapse(navbarContentChildren, navbarContentParent) {
    // 1- Get necessery values to calculate Height to be assigned to "utilClass"
    let menuRowGap = Number(
      window
        .getComputedStyle(this.#navbarContentParent)
        .getPropertyValue("row-gap")
        .replace("px", "")
        .trimEnd()
    );
    let menuHeight =
      this.#calcElementsHeight(navbarContentChildren) + menuRowGap;
    // 1- Select "closing" class
    navbarContentParent.classList.add("closing");
    const utilClass = document.querySelector(".closing");
    // 2- Set "closing" class height to calculated "menuHeight"
    utilClass.style.height = `${menuHeight}px`;
    wait(50)
      .then(() => {
        // 3- Wait x amount of time to set height for Transition to work
        navbarContentParent.style.height = "0px";
        return wait(250);
      })
      .then(() => {
        // 4- Remove transition class
        navbarContentParent.classList.remove("closing");
        navbarContentParent.style = "";
      });
  }
}
