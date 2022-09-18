import createElement from "../../assets/lib/create-element.js";

/*
<div class="carousel__slide" data-id="penang-shrimp">
  <img src="/assets/images/carousel/...значение slide.image..." class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€<!--значение slide.price--></span>
    <div class="carousel__title"><!--значение slide.name--></div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>
*/

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement("div");
    this.elem.classList.add("carousel");

    let inner = document.createElement("div");
    inner.classList.add("carousel__inner");

    for (let i = 0; i < slides.length; i++) {
      const newSlide = document.createElement("div");
      newSlide.classList.add("carousel__slide");
      newSlide.setAttribute("data-id", `${slides[i].name}`);
      newSlide.innerHTML = `<img src="/assets/images/carousel/${slides[i].image}" class="carousel__img" alt="slide">`;

      const caption = document.createElement("div");
      caption.classList.add("carousel__caption");
      caption.innerHTML = `<span class="carousel__price">€${slides[
        i
      ].price.toFixed(2)}</span>
      <div class="carousel__title">${slides[i].name}</div>`;

      const button = document.createElement("button");
      button.classList.add("carousel__button");
      button.setAttribute("type", "button");
      button.innerHTML =
        '<img src="/assets/images/icons/plus-icon.svg" alt="icon">';

      button.addEventListener("click", () => {
        const event = new CustomEvent("product-add", {
          // имя события должно быть именно "product-add"
          detail: slides[i].id, // Уникальный идентификатора товара из объекта товара
          bubbles: true, // это событие всплывает - это понадобится в дальнейшем
        });
        this.elem.dispatchEvent(event);
      });

      inner.appendChild(newSlide);
      newSlide.appendChild(caption);
      caption.appendChild(button);
    }

    let right = document.createElement("div");
    right.setAttribute("class", "carousel__arrow carousel__arrow_right");
    right.innerHTML = `<img src="/assets/images/icons/angle-icon.svg" alt="icon">`;

    let left = document.createElement("div");
    left.setAttribute("class", "carousel__arrow carousel__arrow_left");
    left.innerHTML = `<img src="/assets/images/icons/angle-left-icon.svg" alt="icon">`;

    document.body.append(this.elem);
    this.elem.appendChild(right);
    this.elem.appendChild(left);
    this.elem.appendChild(inner);

    let screen = document.querySelector(".carousel__inner");
    let state = 0;

    left.style.display = "none";
    right.addEventListener("click", () => {
      const widthScreen = screen.clientWidth;

      if (state > widthScreen) {
        right.style.display = "none";
      }
      {
        state = state + widthScreen;
        screen.style.transform = `translateX(-${state}px)`;
        left.style.display = "";
      }
    });

    left.addEventListener("click", () => {
      const widthScreen = screen.clientWidth;

      if (state === widthScreen) {
        right.style.display = "none";
        left.style.display = "none";
      }

      {
        state = state - widthScreen;
        screen.style.transform = `translateX(-${state}px)`;
        right.style.display = "";
      }
    });
  }
}
