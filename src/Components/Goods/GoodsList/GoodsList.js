import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
  const goodsListShow = props.goodsList.map((item) =>
    {
      const keyStr = Math.random().toString();
      return (
        <GoodsItem key={keyStr} name={item.name} price={item.price} currency={item.currency} />
      );
    }
  );
  return (
    <ul>{goodsListShow}</ul>
  )
}

export default GoodsList;