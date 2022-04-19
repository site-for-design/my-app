const GoodItem = (props) =>
  <li>
    <p>Название товара: {props.name}</p>
    <p>Цвет: {props.color}</p>
    <p>Цена: {props.price + props.currency}</p>
  </li>;
export default GoodItem;