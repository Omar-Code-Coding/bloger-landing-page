import "regenerator-runtime/runtime.js";
import wait from "./helperFunctions.js";
export default class Accordion {
  #accordionContainer = document.querySelector(".accordions-container");
  #accordion = document.querySelectorAll(".accordion");
  #accordionBtn = document.querySelectorAll(".accordion__btn");
  #accordionLinks = document.querySelectorAll(".accordion__links");

  constructor() {
    // Events
    this.#accordionContainer.addEventListener(
      "click",
      this.#toggleAccordion.bind(this)
    );
    this.init();
  }

  init() {
    this.#accordionLinks.forEach((el) => el.classList.add("collapse"));
    this.#accordionBtn.forEach((el) => el.classList.add("close"));
  }

  #toggleAccordion(e) {
    // Doesn't Activate, Disable accoridon if not clicked directly
    if (!e.target.classList.contains("accordion__btn")) return;
    const activeAccordion = e.target.nextElementSibling;
    e.preventDefault();

    // Disable Accordion
    if (!activeAccordion.classList.contains("collapse")) {
      return this.#closeAccordion(e);
    }

    // Activate Accordion
    if (activeAccordion.classList.contains("collapse")) {
      return this.#openAccordion(e);
    }
  }

  #openAccordion(e) {
    const activeAccordionBtn = e.target;
    const activeAccordion = e.target.nextElementSibling;
    // 1- Active accordion
    activeAccordion.classList.remove("collapse");
    // --1- Rotate Arrow next to accordion
    activeAccordionBtn.classList.remove("close");

    // 2- Set transition
    let accordionHeight = activeAccordion.clientHeight;
    activeAccordion.classList.add("collapsing");
    // --1- Set active accordion's height after x amount of time so that Transition start
    wait(1)
      .then(() => {
        activeAccordion.style.height = `${accordionHeight}px`;
        activeAccordion.style.display = "";
        // Set transition
        return wait(250);
      })
      .then(() => {
        activeAccordion.classList.remove("collapsing");
        activeAccordion.style = "";
      });
  }

  #closeAccordion(e) {
    const activeAccordionBtn = e.target;
    const activeAccordion = e.target.nextElementSibling;
    let accordionHeight = activeAccordion.clientHeight;
    // Set transition
    activeAccordion.classList.add("collapsing");

    const utilClass = document.querySelector(".collapsing");
    utilClass.style.height = `${accordionHeight}px`;

    wait(1)
      .then(() => {
        activeAccordion.style.height = "0px";
        return wait(250);
      })
      .then(() => {
        activeAccordion.classList.remove("collapsing");
        // Disable Accordion
        activeAccordion.classList.add("collapse");
        activeAccordion.style = "";
      });
    // Rotate Arrow next to accordion__btn class
    activeAccordionBtn.classList.add("close");
  }
}
