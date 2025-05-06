import iconPlus from "/assets/images/icon-plus.svg";
import iconMinus from "/assets/images/icon-minus.svg";

document.addEventListener("click", (e) => {
  const toggleContainer = e.target.closest("[data-accordion-btn-container]");
  if (!toggleContainer) return;

  const button = toggleContainer.querySelector("[data-accordion-btn]");
  const img = button.querySelector("[data-accordion-btn-img]");
  const accordionItem = toggleContainer.closest("[data-accordion-container]");
  const content = accordionItem.querySelector("[data-accordion-content]");

  toggleAccordion(content, button, img);
});

function toggleAccordion(content, button, img) {
  content.classList.toggle("expanded");

  const isNowExpanded = content.classList.contains("expanded");
  button.setAttribute("aria-expanded", isNowExpanded);
  img.src = isNowExpanded ? iconMinus : iconPlus;
}
