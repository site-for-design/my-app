import React, { useState } from 'react';
import * as _ReactDOM  from 'react-dom';

import styles from './Goods.module.css';
import GoodsForm from './GoodsForm/GoodsForm';
import GoodsList from './GoodsList/GoodsList';
import Popup from '../../Components/Popup/Popup';

import useGoodsList from './useGoodsList';

function Goods() {

  const { isLoading, error, setError, goodsList, createItem, editItem, removeItem } = useGoodsList();

  // console.log(removeItem);

  // edit
  const [editableGoodsItem, setEditableGoodsItem] = useState(null);
  const editGoodsItem = (item) => {
    setEditableGoodsItem(item);
  }

  const getGoodsItem = (name, price, currency) => {
    if (editableGoodsItem != null) {

      editItem(name, price, currency, editableGoodsItem)

      setEditableGoodsItem(() => null);

    } else {

      createItem(name, price, currency);
    }
  }
  const s = () => {
    setError(null);
  };
  function Content() {
    if (isLoading) {
      return <div className={styles.loading}>loading...</div>
    }
    if (!isLoading && error !== null) {
      alert('sdsd');
      return (
        _ReactDOM.createPortal(
          <>
              <Popup isFormValid={s} popupMessage={{title: 'Problem with Data Base!', desc: error}} />
              <div className="overlay"></div>
          </>
        , document.querySelector('body'))
      );
    } 
    if (!isLoading) {
      return <GoodsList goodsList={goodsList} giveEditableGoodsItem={editGoodsItem} removeGoodsItem={removeItem} />
    }
  }

  return (
    <div className={styles.goodsWrap}>
      <ul><Content /></ul>
      <GoodsForm getGoodsItem={getGoodsItem} editableGoodsItem={editableGoodsItem} />
    </div>
  );
}
export default Goods;