// import { createStore } from 'redux';
// import reducerGoodsItem from '../Components/Goods/Reducers/reducer';
// import initialGoodsItemState from '../Components/Goods/Reducers/initialGoodsItemState';

// const store = createStore(reducerGoodsItem, initialGoodsItemState);

// export default store;

import { configureStore } from '@reduxjs/toolkit'

import goodsForm from '../Components/Goods/Reducers/GoodsForm.toolkit';

const store = configureStore({
  reducer: {
    goodsForm: goodsForm,
  }
})

export default store