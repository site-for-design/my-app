const GoodsItem = (props) =>


  <li key={props.id}>
    <p>Название товара: {props.name}</p>
    <p>Цена: {props.price + props.currency}</p>
  </li>;
export default GoodsItem;