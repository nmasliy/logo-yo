
export function initAccordion(triggerSelector, parentSelector) {
  const triggerNodes = document.querySelectorAll(triggerSelector);

  if (!triggerNodes.length > 0) return;

  triggerNodes.forEach((el) => {
    el.addEventListener('click', function () {
      const parentNode = el.closest(parentSelector);

      parentNode.classList.toggle('is-active');
    });
  });
}
