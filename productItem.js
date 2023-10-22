export class ProductItem {
    static addProductToDOM(product) {
        const referenceElement = document.querySelector(".input");
        const htmlString = `
        <div class="grid-item item">${product.name}</div>
        <div class="grid-item price">${product.price}</div>
        <a class="grid-item button" data-id="${product.id}">x</a>
        `;
        referenceElement.insertAdjacentHTML("beforebegin", htmlString);
    }
}
