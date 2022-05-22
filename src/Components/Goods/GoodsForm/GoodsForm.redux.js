import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GoodsForm.css';
import portalPopup from '../../../Components/Popup/PortalPopup';


const setErrorMessage = (nameIsValid, priceIsValid, currencyIsValid) => {
    let invalidInputs = '';
    if (!nameIsValid) {
        invalidInputs += 'Name is invalid<br>';
    }    
    if (!priceIsValid) {
        invalidInputs +=  'Price is invalid<br>';
    }    
    if (!currencyIsValid) {
        invalidInputs += 'Currency is invalid';
    }
    return invalidInputs;
}


const GoodsForm = (props) => {

    const dispatch = useDispatch();
    const name = useSelector(store => store.name);
    const nameIsValid = useSelector(store => store.nameIsValid);
    const price = useSelector(store => store.price);
    const priceIsValid = useSelector(store => store.priceIsValid);
    const currency = useSelector(store => store.currency);
    const currencyIsValid = useSelector(store => store.currencyIsValid);
    const isFormValid = useSelector(store => store.isFormValid);

    const validateNameChangeHandler = (event) => dispatch({type: 'NAME_CHANGE', payload: event.target.value});
    const validatePriceChangeHandler = (event) => dispatch({type: 'PRICE_CHANGE', payload: event.target.value});
    const validateCurrencyChangeHandler = (event) => dispatch({type: 'CURRENCY_CHANGE', payload: event.target.value});
    
    useEffect(() => {
        if (props.editableGoodsItem != null) {
            dispatch({type: 'SET_EDITABLE_GOODS_ITEM', payload: {
                name: props.editableGoodsItem.name,
                price: props.editableGoodsItem.price,
                currency: props.editableGoodsItem.currency
            }})
        }
    }, [props.editableGoodsItem]);

    const closePopup = () => {
        dispatch({type: 'SET_IS_FORM_VALID', payload: true});
    }
    
    const submitForm = (e) => {
        e.preventDefault();
        
        if (!nameIsValid || !priceIsValid || !currencyIsValid) {
            dispatch({type: 'SET_IS_FORM_VALID', payload: false});
        } else {
            props.getGoodsItem(name, price, currency);
            dispatch({type: 'CLEAR_FORM'});
        }
    }
    
    return (
       <>
            {
                !isFormValid &&
                portalPopup(closePopup, 'Form is invalid!', setErrorMessage(nameIsValid, priceIsValid, currencyIsValid))
            }
            <form className='goods-form' onSubmit={submitForm}>
                <div>
                    <p>Название товара:</p>
                    <input  className={nameIsValid ? '' : 'invalid'}
                            type="text" 
                            name="name" 
                            value={name}
                            onChange={validateNameChangeHandler} 
                            />
                </div>
                <label>
                    <p>Цена:</p>
                    <input  className={priceIsValid ? '' : 'invalid'}
                            type="text" 
                            name="price" 
                            value={price}
                            onChange={validatePriceChangeHandler} 
                            />
                </label>
                <label>
                    <p>Валюта:</p>
                    <input  className={currencyIsValid ? '' : 'invalid'}
                            type="text" 
                            name="currency" 
                            value={currency}
                            onChange={validateCurrencyChangeHandler} 
                            />
                </label>
                <button className='btn' type="submit">Подтвердить</button>
            </form>
       </>
    )
}

export default GoodsForm;