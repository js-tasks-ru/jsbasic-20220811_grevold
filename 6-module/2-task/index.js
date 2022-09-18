export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = document.createElement("div");
    this.elem.classList.add("card");
    this.elem.innerHTML = `
    <div class="card__top">
        <img src="/assets/images/products/${
          product.image
        }" class="card__image" alt="product">
        <span class="card__price">€${product.price.toFixed(2)}</span>
    </div>`;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card__body");
    cardBody.innerHTML = `<div class="card__title">${product.name}</div>`;
    let button = document.createElement("button");
    button.innerHTML = `<img src="/assets/images/icons/plus-icon.svg" alt="icon">`;
    button.classList.add("card__button");
    button.setAttribute("type", "button");
    button.addEventListener("click", () => {
      const event = new CustomEvent("product-add", {
        // имя события должно быть именно "product-add"
        detail: this.product.id, // Уникальный идентификатора товара из объекта товара
        bubbles: true, // это событие всплывает - это понадобится в дальнейшем
      });
      this.elem.dispatchEvent(event);
    });
    cardBody.appendChild(button);

    this.elem.appendChild(cardBody);
    document.body.append(this.elem);
  }
}
