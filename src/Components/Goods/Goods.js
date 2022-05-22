import React, { useState } from 'react';

import styles from './Goods.module.css';
import GoodsForm from './GoodsForm/GoodsForm.redux';
import GoodsList from './GoodsList/GoodsList';
import portalPopup from '../../Components/Popup/PortalPopup';

import useGoodsList from './useGoodsList';


function Goods() {

  const { isLoading, error, setError, goodsList, createItem, editItem, removeItem, updateGoodsList } = useGoodsList();

  // console.log(removeItem);

  // edit
  const [editableGoodsItem, setEditableGoodsItem] = useState(null);
  const editGoodsItem = (item) => {
    setEditableGoodsItem(item);
  }

  const getGoodsItem = (name, price, currency) => {
    if (editableGoodsItem != null) {

      editItem(name, price, currency, editableGoodsItem)

      setEditableGoodsItem(null);

    } else {

      createItem(name, price, currency);
    }
  }
  const popupClose = () => {
    setError(null);
    updateGoodsList();
  };
  function Content() {
    if (isLoading) {
      return <div className={styles.loading}>loading...</div>

    } else if (error !== null) {
      return portalPopup(popupClose, 'Problem with Data Base!', error);

    } else {
      return <GoodsList goodsList={goodsList} giveEditableGoodsItem={editGoodsItem} removeGoodsItem={removeItem} />
    }
  }

  return (
    <div className={styles.goodsWrap}>
      <ul>{Content()}</ul>
      <GoodsForm getGoodsItem={getGoodsItem} editableGoodsItem={editableGoodsItem} />
    </div>
  );
}

export default Goods;