function initCarousel() {
  let buttonNext = document.querySelector(".carousel__arrow_right");
  let buttonPrev = document.querySelector(".carousel__arrow_left");
  let screen = document.querySelector(".carousel__inner");
  let widthScreen = screen.offsetWidth;

  let state = 0;
  buttonPrev.style.display = "none";

  buttonNext.addEventListener("click", () => {
    if (state > widthScreen) {
      buttonNext.style.display = "none";
    }
    {
      state = state + widthScreen;
      screen.style.transform = `translateX(-${state}px)`;
      buttonPrev.style.display = "";
    }
  });

  buttonPrev.addEventListener("click", () => {
    if (state === widthScreen) {
      buttonPrev.style.display = "none";
    }

    {
      state = state - widthScreen;
      screen.style.transform = `translateX(-${state}px)`;
      buttonNext.style.display = "";
    }
    console.log(widthScreen);
    console.log(state);
  });
}
