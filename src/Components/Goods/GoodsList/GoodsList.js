import GoodsItem from './GoodsItem/GoodsItem';

const GoodsList = (props) => {

  const goodsListShow = props.goodsList.map((item) =>
    {
      const editGoodsItem = () => {
        props.giveEditableGoodsItem(item);
      }
      const removeGoodsItem = () => {
        props.removeGoodsItem(item);
      }
      return (
        <GoodsItem key={item.key} name={item.name} price={item.price} currency={item.currency} editGoodsItem={editGoodsItem} removeGoodsItem={removeGoodsItem} />
      );
    }
  );
  return goodsListShow;
}

export default GoodsList;