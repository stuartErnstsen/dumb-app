const header = document.querySelector("header");

document.addEventListener("scroll", () => {
  const { pageYOffset } = window;
  if (pageYOffset > 90) {
    header.classList.add("shrink-header");
  } else {
    header.classList.remove("shrink-header");
  }
});
