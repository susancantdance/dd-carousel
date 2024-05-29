function showHideMenu(menuTitleClass, optionsClass) {
  const link = document.querySelector(menuTitleClass);
  const showOptions = document.querySelectorAll(optionsClass);

  link.addEventListener("mouseover", () => {
    showOptions.forEach((key) => {
      key.classList.remove("invisible");
    });
    link.addEventListener("mouseout", () => {
      showOptions.forEach((key) => {
        key.classList.add("invisible");
      });
    });
  });
}

export { showHideMenu };
