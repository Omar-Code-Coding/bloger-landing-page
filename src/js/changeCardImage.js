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

function renderCardImg(inputWidth, attributeValue, imgs) {
  // min-width
  if (window.innerWidth > inputWidth) {
    return setCardImg(attributeValue, imgs);
  }
}
export { renderCardImg };
