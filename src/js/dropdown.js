import "regenerator-runtime/runtime.js";
import wait from "./helperFunctions.js";
export default class Dropdown {
  parentElement;
  #dropdown = document.querySelectorAll(".dropdown");
  #dropdownToggle = document.querySelectorAll(".dropdown__toggle");
  #dropdownMenu = document.querySelectorAll(".dropdown__menu");

  constructor(parentEl) {
    this.parentElement = document.querySelector(parentEl);
    document.addEventListener("click", this.#toggleDropdown.bind(this));
    this.#init();
  }

  #init() {
    this.#dropdownMenu.forEach((el) => el.classList.add("collapse"));
    this.#dropdownToggle.forEach((el) => el.classList.add("close"));
  }

  #toggleDropdown(e) {
    const isDropdownBtn = e.target.matches("[data-dropdown-btn]");
    if (!isDropdownBtn && e.target.closest("[data-dropdown]") != null) return;

    let currentDropdown = e.target.nextElementSibling;
    let currentDropdownBtn = e.target;

    if (isDropdownBtn) {
      this.#openDropdown(e, currentDropdown, currentDropdownBtn);
    }

    this.#closeDropdownS(e, currentDropdown, currentDropdownBtn);
  }

  #openDropdown(e, dropdown, dropdownBtn) {
    dropdown.classList.toggle("collapse");
    dropdownBtn.classList.toggle("close");
    e.preventDefault();
    this.#animationExpand(dropdown);
  }

  #closeDropdownS(e, dropdown, dropdownBtn) {
    this.#dropdownMenu.forEach((menu) => {
      if (menu === dropdown) return;
      menu.classList.add("collapse");
    });
    this.#dropdownToggle.forEach((toggleBtn) => {
      if (toggleBtn === dropdownBtn) return;
      toggleBtn.classList.add("close");
    });
  }

  #animationExpand(dropdown) {
    // 2-Set transition
    let dropdownHeight = dropdown.clientHeight;
    dropdown.classList.add("collapsing");
    const utilClass = document.querySelector(".collapsing");
    // --1- Set active accordion's height after x amount of time so that Transition start
    wait(1)
      .then(() => {
        dropdown.style.height = `${dropdownHeight}px`;
        dropdown.style.display = "";
        // Set transition
        return wait(250);
      })
      .then(() => {
        dropdown.classList.remove("collapsing");
        dropdown.style = "";
      });
  }
}
