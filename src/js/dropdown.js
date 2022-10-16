import "regenerator-runtime/runtime.js";
import wait from "./helperFunctions.js";
export default class Dropdown {
  parentElement;
  #dropdown = document.querySelectorAll(".dropdown");
  #dropdownToggle = document.querySelectorAll(".dropdown__toggle");
  #dropdownMenu = document.querySelectorAll(".dropdown__menu");
  #dropdownItems = document.querySelectorAll(".dropdown__item");

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
    try {
      const isDropdownBtn = e.target.matches("[data-dropdown-btn]");
      if (!isDropdownBtn && e.target.closest("[data-dropdown]") != null) return;

      const currentDropdown = e.target.nextElementSibling;
      const currentDropdownBtn = e.target;
      const currentDropdownItem = currentDropdown.firstElementChild;
      if (!currentDropdown && currentDropdownBtn) {
        throw new Error(
          "There is something wrong with dropdown, please try again later"
        );
      }

      if (isDropdownBtn) {
        this.#openDropdown(
          e,
          currentDropdown,
          currentDropdownBtn,
          currentDropdownItem
        );
      }
      this.#closeDropdownS(e, currentDropdown, currentDropdownBtn);
    } catch (error) {
      throw error.message;
    }
  }

  #openDropdown(e, dropdown, dropdownBtn, dropdownItem) {
    dropdown.classList.toggle("collapse");
    dropdownBtn.classList.toggle("close");
    e.preventDefault();
    this.#animationExpand(dropdown, dropdownItem);
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

  #animationExpand(dropdown, dropdownItem) {
    // 2-Set transition
    let dropdownRowGap = Number(
      window
        .getComputedStyle(dropdown)
        .getPropertyValue("row-gap")
        .replace("px", "")
        .trimEnd()
    );
    let dropdownItemHeight = Number(
      window
        .getComputedStyle(dropdownItem)
        .getPropertyValue("height")
        .replace("px", "")
        .trimEnd()
    );
    let dropdownHeight =
      dropdown.clientHeight - (dropdownItemHeight + dropdownRowGap);
    dropdown.classList.add("collapsing");
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
