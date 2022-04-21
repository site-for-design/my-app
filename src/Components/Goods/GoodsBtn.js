const GoodsBtn = () => 
    <div className="btn" onClick={() => {

    let newProduct = {
        name: prompt('Название товара'),
        price: prompt('Цена'),
        currency: prompt('Валюта')
    }
    
    let newProductHtml = `<li><p>Название товара: ${newProduct.name}</p><p>Цена: ${newProduct.price + newProduct.currency}</p></li>`;
    document.querySelector('.goods-wrap ul').innerHTML += newProductHtml;
    
    }}>Добавить товар</div>

export default GoodsBtn;