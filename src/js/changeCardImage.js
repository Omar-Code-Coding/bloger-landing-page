function getCardImgElement(attributeValue) {
  return attributeValue.map((attrValue) =>
    document.querySelector(`[data-img="${attrValue}"]`)
  );
}

function setCardImg(attributeValue, imgs) {
  return getCardImgElement(attributeValue).forEach(
    (el, i) => (el.src = imgs[i])
  );
}

function renderCardImg(attributeValue, mobileImgs, desktopImgs) {
  if (window.innerWidth < 1024) {
    setCardImg(attributeValue, mobileImgs);
  }

  if (window.innerWidth > 1024) {
    setCardImg(attributeValue, desktopImgs);
  }
}

/**
 * Change "card__img" on page resize
 * @param  {any} handlerArg Pass arguments to the handler-function
 * @returns Event listener to handle page resize
 */
function setCardImgHandler(...handlerArg) {
  return window.addEventListener("resize", () => renderCardImg(...handlerArg));
}

export { renderCardImg, setCardImgHandler };
