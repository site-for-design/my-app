import './goods.css';
import GoodsList from './GoodsList';

function Goods() {
    return (
      <div className="goods-wrap">
        <GoodsList />
        <div className="btn" onClick={() => {

          let newProduct = {
            name: prompt('Название товара'),
            price: prompt('Цена'),
            currency: prompt('Валюта')
          }

          let newProductHtml = `<li><p>Название товара: ${newProduct.name}</p><p>Цена: ${newProduct.price + newProduct.currency}</p></li>`;
          document.querySelector('.goods-wrap ul').innerHTML += newProductHtml;
          
        }}>Добавить товар</div>
        </div>
    );
}
export default Goods;