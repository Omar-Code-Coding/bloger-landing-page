function loopImgsAndElements(imgNum, imgs) {
  for (let i = 0; i < imgNum.length; i++) {
    document.querySelector(`[data-img="${imgNum[i]}"`).src = imgs[i];
  }
}

function setCardImg(imgNum, mobileImgs, desktopImgs) {
  if (window.innerWidth < 1024) {
    loopImgsAndElements(imgNum, mobileImgs);
  }

  if (window.innerWidth > 1024) {
    loopImgsAndElements(imgNum, desktopImgs);
  }
}

function changeCardImgOnResize(imgNum, mobileImgs, desktopImgs) {
  return window.addEventListener("resize", () => {
    setCardImg(imgNum, mobileImgs, desktopImgs);
  });
}

export { setCardImg, changeCardImgOnResize };
