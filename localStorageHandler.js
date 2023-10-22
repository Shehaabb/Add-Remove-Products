export class LocalStorageHandler {
    static saveProduct(product) {
        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
    }

    static getProducts() {
        return JSON.parse(localStorage.getItem("products")) || [];
    }

    static removeProduct(id) {
        const products = this.getProducts();
        const filtered = products.filter(product => product.id !== id);
        localStorage.setItem("products", JSON.stringify(filtered));
    }

    static getTotalPrice() {
        const products = this.getProducts();
        return products.reduce((total, product) => total + parseFloat(product.price), 0);
    }

    static loadProducts(addProductToDOM) {
        const products = this.getProducts();
        products.forEach(product => {
            addProductToDOM(product);
        });
    }
}
