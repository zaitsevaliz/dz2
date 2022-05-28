class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
        this.summa();
    }
    _fetchProducts() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
            block.innerHTML += item.render();
        }


    }
    summa() {
        let summa = 0;
        this.goods.forEach(function (item) {
            summa += item.price;
        })
        console.log(summa);
        const blockForSum = document.querySelector('.products-sum');
        blockForSum.insertAdjacentHTML('beforeend', `Сумма всех товаров: ${summa}`);
    }
}
class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="products-item">
        <img src="${this.img}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class = "buy-btn" Купить</button>
        </div>`;

    }
}

let list = new ProductList();