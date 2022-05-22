import initialGoodsItemState from './initialGoodsItemState';

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

export default reducerGoodsItem;