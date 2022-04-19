import GoodItem from './GoodItem';

const GoodsList = () => {
  const goodsList = [
    {
      name: 'IPhone X',
      price: '200',
      currency: '$'
    },
    {
      name: 'Samsung Galaxy S7',
      price: '120',
      currency: 'рос. р'
    },
    {
      name: 'Nokia 3310',
      price: '2400',
      currency: '$'
    }
  ];
  const goodsListShow = goodsList.map((item) =>
    {
      return (
        <GoodItem name={item.name} price={item.price} currency={item.currency} />
      );
    }
  );
  return (
    <ul>{goodsListShow}</ul>
  )
}

export default GoodsList;