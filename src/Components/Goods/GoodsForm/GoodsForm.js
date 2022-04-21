import React, { useState } from 'react';
import './GoodsForm.css';

const GoodsForm = (props) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('');

    const getNameValue = (e) => setName(e.target.value);
    const getPriceValue = (e) => setPrice(e.target.value);
    const getCurrencyValue = (e) => setCurrency(e.target.value);

    const addNewGoodItemInfo = (e) => {
        e.preventDefault();
        console.log(name + price + currency);

        props.addNewGoodItem(name, price, currency);
        // props.addNewGoodItem.name = name;
        // props.addNewGoodItem.price = price;
        // props.addNewGoodItem.currency = currency;
    }
    return (
        <form className='goods-form' onSubmit={addNewGoodItemInfo}>
            <div>
                <p>Название товара:</p>
                <input type="text" name="name" onChange={getNameValue} />
            </div>
            <label>
                <p>Цена:</p>
                <input type="text" name="price" onChange={getPriceValue} />
            </label>
            <label>
                <p>Валюта:</p>
                <input type="text" name="currency" onChange={getCurrencyValue} />
            </label>
            <button type="submit">Подтвердить</button>
        </form>
    )
}
export default GoodsForm;