import React, { useEffect, useReducer } from 'react';
import './GoodsForm.css';
import portalPopup from '../../../Components/Popup/PortalPopup';

const initialGoodsItemState = {
    name: '',
    nameIsValid: false,
    price: '',
    priceIsValid: false,
    currency: '',
    currencyIsValid: false,
    isFormValid: true
}

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

const reducerGoodsItem = (state, action) => {

    switch (action.type) {
        case 'NAME_CHANGE': {
            return {
                ...state,
                name: action.payload,
                nameIsValid: action.payload.trim().length > 0,
            };
        }
        case 'PRICE_CHANGE': {
            return {
                ...state,
                price: action.payload,
                priceIsValid: action.payload.trim().length > 0 && !isNaN(action.payload),
            };
        }
        case 'CURRENCY_CHANGE': {
            return {
                ...state,
                currency: action.payload,
                currencyIsValid: action.payload.trim().length > 0,
            };
        }
        case 'SET_EDITABLE_GOODS_ITEM': {
            return {
                ...state,
                name: action.payload.name,
                nameIsValid: action.payload.name.trim().length > 0,
                price: action.payload.price,
                priceIsValid: action.payload.price.trim().length > 0 && !isNaN(action.payload.price),
                currency: action.payload.currency,
                currencyIsValid: action.payload.currency.trim().length > 0,
            };
        }
        case 'SET_IS_FORM_VALID': {
            return {
                ...state,
                isFormValid: action.payload,
            };
        }
        case 'CLEAR_FORM': {
            return initialGoodsItemState; 
        }
        default: {
            return state;
        }
    }
}

const GoodsForm = (props) => {

    const [goodsItemState, dispatchGoodsItem] = useReducer(reducerGoodsItem, initialGoodsItemState)

    const validateNameChangeHandler = (event) => dispatchGoodsItem({type: 'NAME_CHANGE', payload: event.target.value});
    const validatePriceChangeHandler = (event) => dispatchGoodsItem({type: 'PRICE_CHANGE', payload: event.target.value});
    const validateCurrencyChangeHandler = (event) => dispatchGoodsItem({type: 'CURRENCY_CHANGE', payload: event.target.value});
    
    useEffect(() => {
        if (props.editableGoodsItem != null) {
            dispatchGoodsItem({type: 'SET_EDITABLE_GOODS_ITEM', payload: {
                name: props.editableGoodsItem.name,
                price: props.editableGoodsItem.price,
                currency: props.editableGoodsItem.currency
            }})
        }
    }, [props.editableGoodsItem]);

    const closePopup = () => {
        dispatchGoodsItem({type: 'SET_IS_FORM_VALID', payload: true});
    }
    
    const submitForm = (e) => {
        e.preventDefault();
        
        if (!goodsItemState.nameIsValid || !goodsItemState.priceIsValid || !goodsItemState.currencyIsValid) {
            dispatchGoodsItem({type: 'SET_IS_FORM_VALID', payload: false});
        } else {
            props.getGoodsItem(goodsItemState.name, goodsItemState.price, goodsItemState.currency);
            dispatchGoodsItem({type: 'CLEAR_FORM'});
        }
    }
    
    return (
       <>
            {
                !goodsItemState.isFormValid &&
                portalPopup(closePopup, 'Form is invalid!', setErrorMessage(goodsItemState.nameIsValid, goodsItemState.priceIsValid, goodsItemState.currencyIsValid))
            }
            <form className='goods-form' onSubmit={submitForm}>
                <div>
                    <p>Название товара:</p>
                    <input  className={goodsItemState.nameIsValid ? '' : 'invalid'}
                            type="text" 
                            name="name" 
                            value={goodsItemState.name}
                            onChange={validateNameChangeHandler} 
                            />
                </div>
                <label>
                    <p>Цена:</p>
                    <input  className={goodsItemState.priceIsValid ? '' : 'invalid'}
                            type="text" 
                            name="price" 
                            value={goodsItemState.price}
                            onChange={validatePriceChangeHandler} 
                            />
                </label>
                <label>
                    <p>Валюта:</p>
                    <input  className={goodsItemState.currencyIsValid ? '' : 'invalid'}
                            type="text" 
                            name="currency" 
                            value={goodsItemState.currency}
                            onChange={validateCurrencyChangeHandler} 
                            />
                </label>
                <button className='btn' type="submit">Подтвердить</button>
            </form>
       </>
    )
}
export default GoodsForm;