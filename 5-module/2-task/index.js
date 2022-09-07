function toggleText() {
  let text = document.querySelector("#text");
  let button = document.querySelector(".toggle-text-button");
  let buttonText = true;
  button.addEventListener("click", () => {
    if (buttonText) {
      text.hidden = true;
      buttonText = false;
    } else {
      text.hidden = false;
      buttonText = true;
    }
  });
}
