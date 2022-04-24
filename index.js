let pageHeight = window.innerHeight;

let scrollButtons = document.querySelectorAll("button[class^=scroll]");

for (let i = 0; i < scrollButtons.length; i++) {
  scrollButtons[i].addEventListener("click", () => {
    window.scrollBy(0, pageHeight);
  });
}
