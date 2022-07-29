export default class Accordion {
  accordionContainer = document.querySelector(".dropdown-content");
  accordion = document.querySelectorAll(".accordion");
  accordionLink = document.querySelectorAll(".accordion-link");
  accordionContent = document.querySelectorAll(".accordion-content");

  constructor() {
    // Elements

    // Events
    document.addEventListener("click", this._closeAccordion.bind(this), {
      capture: true,
    });
    this.accordionContainer.addEventListener(
      "click",
      this._toggleAccordion.bind(this)
    );
  }

  _shrinkAccordion() {
    const windowWidth = window.innerWidth;
    const accordionContainer = this.accordionContainer;
    // Expand accordion for desktop size
    if (windowWidth > 1024) accordionContainer.classList.remove("menu-close");

    // Shrink accordions into a menu for mobile size
    if (windowWidth < 1024) accordionContainer.classList.add("menu-close");
  }

  _toggleAccordion(e) {
    // Return if Clicked element is not "accoridonLink"
    if (!e.target.classList.contains("nav__accordion-link")) return;
    const currentAccordion = e.target.nextElementSibling;

    // Close Accordion
    if (!currentAccordion.classList.contains("collapse"))
      return this._closeAccordion();

    // Open Accordion
    if (currentAccordion.classList.contains("collapse"))
      return this._openAccordion(e);
  }

  _openAccordion(e) {
    const currentAccordion = e.target.nextElementSibling;
    const currentAccordionIcon = currentAccordion.closest(".nav__accordion");

    currentAccordion.classList.remove("collapse");
    currentAccordionIcon.classList.add("open");

    this._transitionAccordion(e);
  }

  _closeAccordion(e) {
    this.accordionContent.forEach((el) => {
      if (el.classList.contains("collapse")) return;
      this._wait(2).then(() => el.classList.add("collapse"));
    });
    this.accordion.forEach((el) => el.classList.remove("open"));
  }

  _transitionAccordion(e) {
    const currentAccordion = e.target.nextElementSibling;
    // Get the height of clicked accordion
    const accordionHeight = e.target.nextElementSibling.clientHeight;

    // Set clicked accordion's height after amount of time so that Transition start
    this._wait(1).then(() => {
      currentAccordion.style.height = `${accordionHeight}px`;
      currentAccordion.style.display = "";
    });

    // Set transition
    currentAccordion.classList.add("collapsing");
    this._wait(300).then(() => {
      currentAccordion.classList.remove("collapsing");
      currentAccordion.style = "";
    });
  }

  _wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
