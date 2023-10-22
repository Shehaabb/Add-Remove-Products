import { LocalStorageHandler } from './localStorageHandler.js';
import { ProductItem } from './productItem.js';

let totalPrice = LocalStorageHandler.getTotalPrice() + 12;

function updateTotalPriceDisplay() {
    const totalPriceElement = document.querySelector('.total');
    totalPriceElement.textContent = 'Total Price: ' + totalPrice;
}

document.addEventListener("DOMContentLoaded", () => {
    LocalStorageHandler.loadProducts(ProductItem.addProductToDOM);
    updateTotalPriceDisplay();
});

const productInput = document.getElementById("product");
const priceInput = document.getElementById("price");
const addButton = document.getElementById("add");

addButton.addEventListener("click", () => {
    if (productInput.value && priceInput.value) {
        const productPrice = parseFloat(priceInput.value);
        const product = {
            name: productInput.value,
            price: productPrice,
            id: new Date().getTime(),
        };

        totalPrice += productPrice;
        updateTotalPriceDisplay();

        LocalStorageHandler.saveProduct(product);
        ProductItem.addProductToDOM(product);

        productInput.value = "";
        priceInput.value = "";
    }
});

const container = document.querySelector(".grid-container");

container.addEventListener("click", (e) => {
    if (e.target.matches(".button")) {
        const productElement = e.target.previousElementSibling;
        const productPrice = parseFloat(productElement.textContent);

        totalPrice -= productPrice;
        updateTotalPriceDisplay();

        const id = parseInt(e.target.dataset.id);
        LocalStorageHandler.removeProduct(id);
        productElement.previousElementSibling.remove();
        productElement.remove();
        e.target.remove();
    }
});
