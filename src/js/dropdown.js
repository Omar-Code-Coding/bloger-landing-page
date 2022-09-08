import "regenerator-runtime/runtime.js";
import wait from "./helperFunctions.js";

export default class Dropdown {
  #parentElement;
  #dropdown = document.querySelectorAll(".dropdown");
  #dropdownToggle = document.querySelectorAll(".dropdown__toggle");
  #dropdownMenu = document.querySelectorAll(".dropdown__menu");

  constructor() {
    // Events
    wait(2).then(() => {
      this.#parentElement.addEventListener(
        "click",
        this.#toggleDropdown.bind(this)
      );
    });

    document.addEventListener("click", this.#disableDropdown.bind(this));

    this.#init();
  }

  setParentElement(el) {
    this.#parentElement = document.querySelector(el);
    return this.#parentElement;
  }

  #init() {
    this.#dropdownMenu.forEach((el) => el.classList.add("collapse"));
    this.#dropdownToggle.forEach((el) => el.classList.add("close"));
  }

  #toggleDropdown(e) {
    // Doesn't Activate, Disable accoridon if not clicked directly
    if (!e.target.classList.contains("dropdown__toggle")) return;
    const activeDropdown = e.target.nextElementSibling;
    e.preventDefault();
    e.stopPropagation();

    // Disable Accordion
    if (!activeDropdown.classList.contains("collapse")) {
      return this.#disableDropdown(e);
    }

    // Activate Accordion
    if (activeDropdown.classList.contains("collapse")) {
      return this.#activeDropdown(e);
    }
  }

  #activeDropdown(e) {
    const activeToggle = e.target;
    const activeDropdown = e.target.nextElementSibling;
    // 1- Active accordion
    activeDropdown.classList.remove("collapse");
    // --1- Rotate Arrow next to accordion
    activeToggle.classList.remove("close");
    this.#addExpandAnimation(e);
  }

  #disableDropdown(e) {
    this.#addShrinkAnimation(e);
    wait(250).then(() => this.#disableAllDropdown());
  }

  #disableAllDropdown() {
    this.#dropdownMenu.forEach((menu) => {
      menu.classList.add("collapse");
    });
    this.#dropdownToggle.forEach((toggle) => toggle.classList.add("close"));
  }

  #addExpandAnimation(e) {
    const activeToggle = e.target;
    const activeDropdown = e.target.nextElementSibling;

    // 2- Set transition
    let dropdownHeight = activeDropdown.clientHeight;
    activeDropdown.classList.add("collapsing");
    // --1- Set active accordion's height after x amount of time so that Transition start
    wait(1)
      .then(() => {
        activeDropdown.style.height = `${dropdownHeight}px`;
        activeDropdown.style.display = "";
        // Set transition
        return wait(250);
      })
      .then(() => {
        activeDropdown.classList.remove("collapsing");
        activeDropdown.style = "";
      });
  }

  #addShrinkAnimation() {
    // Get dropdown menu that is active
    const activeDropdown = Array.from(this.#dropdownMenu).filter(
      (menu) => !menu.classList.contains("collapse")
    )[0];

    if (!activeDropdown) return;
    let dropdownHeight = activeDropdown.clientHeight;
    // Set transition
    activeDropdown.classList.add("collapsing");
    const utilClass = document.querySelector(".collapsing");
    utilClass.style.height = `${dropdownHeight}px`;

    wait(1)
      .then(() => {
        activeDropdown.style.height = "0px";
        return wait(250);
      })
      .then(() => {
        activeDropdown.classList.remove("collapsing");
        // Disable Accordion
        activeDropdown.style = "";
      });
  }
}
