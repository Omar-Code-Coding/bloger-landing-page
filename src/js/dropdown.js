import "regenerator-runtime/runtime.js";
import wait from "./helperFunctions.js";
export default class Dropdown {
  parentElement;
  #dropdownToggle;
  #dropdownMenu;
  #dropdownItem;

  constructor(parentEl) {
    this.parentElement = parentEl;
    this.#dropdownToggle =
      this.parentElement.querySelector(".dropdown__toggle");
    this.#dropdownMenu = this.parentElement.querySelector(".dropdown__menu");
    this.#dropdownItem = this.parentElement.querySelector(".dropdown__item");

    this.parentElement.addEventListener(
      "click",
      this.#toggleDropdown.bind(this)
    );
    this.#init();
  }

  #init() {
    this.#dropdownMenu.classList.add("collapse");
    this.#dropdownToggle.classList.add("close");
  }

  #toggleDropdown(e) {
    e.preventDefault();
    if (e.target === this.#dropdownToggle) {
      this.#dropdownMenu.classList.toggle("collapse");
      this.#dropdownToggle.classList.toggle("close");
      this.#animationExpand();
    }
  }

  #closeAllDropdown(e, dropdown, dropdownBtn) {
    this.#dropdownMenu.forEach((menu) => {
      if (menu === dropdown) return;
      menu.classList.add("collapse");
    });
    this.#dropdownToggle.forEach((toggleBtn) => {
      if (toggleBtn === dropdownBtn) return;
      toggleBtn.classList.add("close");
    });
  }

  #animationExpand() {
    // 2-Set transition
    let dropdownRowGap = Number(
      window
        .getComputedStyle(this.#dropdownMenu)
        .getPropertyValue("row-gap")
        .replace("px", "")
        .trimEnd()
    );
    let dropdownItemHeight = Number(
      window
        .getComputedStyle(this.#dropdownItem)
        .getPropertyValue("height")
        .replace("px", "")
        .trimEnd()
    );
    let dropdownHeight =
      this.#dropdownMenu.clientHeight - (dropdownItemHeight + dropdownRowGap);
    this.#dropdownMenu.classList.add("collapsing");
    // --1- Set active accordion's height after x amount of time so that Transition start
    wait(1)
      .then(() => {
        this.#dropdownMenu.style.height = `${dropdownHeight}px`;
        this.#dropdownMenu.style.display = "";
        // Set transition
        return wait(250);
      })
      .then(() => {
        this.#dropdownMenu.classList.remove("collapsing");
        this.#dropdownMenu.style = "";
      });
  }
}
