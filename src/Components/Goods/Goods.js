import React, { useState } from 'react';

import './goods.css';
import GoodsForm from './GoodsForm/GoodsForm';
import GoodsList from './GoodsList/GoodsList';
import GoodsBtn from './GoodsBtn';

function Goods() {

  const [goodsList, setGoodsList] = useState([
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
  ]);


  const addNewGoodItem = (name, price, currency) => {
    // setGoodsList(() => {
    //   goodsList.push(
    //     {
    //       name: name,
    //       price: price,
    //       currency: currency
    //     }
    //   );
    // });
    setGoodsList((prevState) => [
      ...prevState,
      {
        name: name,
        price: price,
        currency: currency
      }
    ]);
    console.log(goodsList);
  }

  return (
    <div className="goods-wrap">
      <GoodsForm addNewGoodItem={addNewGoodItem} />
      <GoodsList goodsList={goodsList} />
      <GoodsBtn />
    </div>
  );
}
export default Goods;