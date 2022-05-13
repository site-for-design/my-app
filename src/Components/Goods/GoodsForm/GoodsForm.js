import React, { useState, useEffect } from 'react';
import * as _ReactDOM  from 'react-dom';
import './GoodsForm.css';
import Popup from '../../Popup/Popup';

const GoodsForm = (props) => {
    // create
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('');

    // validate
    const [isFormValid, setIsFormValid] = useState(true);
    const [popupMessage, setPopupMessage] = useState({title: null, desc: null});

    const [nameIsValid, setNameIsValid] = useState(true);
    const [priceIsValid, setPriceIsValid] = useState(true);
    const [currencyIsValid, setCurrencyIsValid] = useState(true);

    useEffect(() => {
        if (props.editableGoodsItem != null) {
            setName(props.editableGoodsItem.name);
            setPrice(props.editableGoodsItem.price);
            setCurrency(props.editableGoodsItem.currency);
        }
    }, [props.editableGoodsItem]);

    const getNameValue = (e) => {
        setName(e.target.value);
        setNameIsValid(() => {
            return e.target.value.trim().length > 0;
        });

    };
    const getPriceValue = (e) => {
        setPrice(e.target.value);
        console.log(e.target.value.trim().length);
        setPriceIsValid(() => {
            return e.target.value.trim().length > 0 && !isNaN(e.target.value);
        });

    };
    const getCurrencyValue = (e) => {
        setCurrency(e.target.value);
        setCurrencyIsValid(() => {
            return e.target.value.trim().length > 0;
        });
    };
    
    const submitForm = (e) => {
        e.preventDefault();

        if (!nameIsValid || !priceIsValid || !currencyIsValid) {
            setIsFormValid(false);

            let invalidInputs = '';
            if (!nameIsValid) {
                invalidInputs += 'Name is invalid<br>';
            }   
            if (!priceIsValid) {
                invalidInputs += 'Price is invalid<br>';
            }
             if (!currencyIsValid) {
                invalidInputs += 'Currency is invalid';
            }
            setPopupMessage({title: 'Form is invalid!', desc: invalidInputs})
            return;
        }
        
        props.getGoodsItem(name, price, currency);
        
        setName('');
        setPrice('');
        setCurrency('');
    }
    const checkFormValid = () => {
        setIsFormValid(true);
    }

    return (
       <>
            {
                !isFormValid && 
                _ReactDOM.createPortal(
                    <>
                        <Popup isFormValid={checkFormValid} popupMessage={popupMessage} />
                        <div className="overlay"></div>
                    </>
                    , document.querySelector('body'))
                
            }
            <form className='goods-form' onSubmit={submitForm}>
                <div>
                    <p>Название товара:</p>
                    <input  className={nameIsValid ? '' : 'invalid'}
                            type="text" 
                            name="name" 
                            onChange={getNameValue} 
                            value={name}
                            />
                </div>
                <label>
                    <p>Цена:</p>
                    <input  className={priceIsValid ? '' : 'invalid'}
                            type="text" 
                            name="price" 
                            onChange={getPriceValue} 
                            value={price}
                            />
                </label>
                <label>
                    <p>Валюта:</p>
                    <input  className={currencyIsValid ? '' : 'invalid'}
                            type="text" 
                            name="currency" 
                            onChange={getCurrencyValue} 
                            value={currency}
                            />
                </label>
                <button className='btn' type="submit">Подтвердить</button>
            </form>
       </>
    )
}
export default GoodsForm;