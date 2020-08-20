const setBackgroundImage = (imgs) => {
  if (window.innerWidth <= 736) {
    return `url(${imgs.small})`;
  } else if (window.innerWidth > 736 && window.innerWidth < 1025) {
    return `url(${imgs.medium})`;
  } else {
    return `url(${imgs.large})`;
  }
};

export default setBackgroundImage;
