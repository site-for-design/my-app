import { createSlice } from '@reduxjs/toolkit'
import initialStateGoodsForm from './initialStateGoodsForm';

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialStateGoodsForm,
  reducers: {
    // todoAdded(state, action) {
    //   // ✅ This "mutating" code is okay inside of createSlice!
    //   state.push(action.payload)
    // },
    // todoToggled(state, action) {
    //   const todo = state.find(todo => todo.id === action.payload)
    //   todo.completed = !todo.completed
    // },
    // todosLoading(state, action) {
    //   return {
    //     ...state,
    //     status: 'loading'
    //   }
    // }


     changeName(state, action) {
            state.name = action.payload,
            nameIsValid: action.payload.trim().length > 0,
        };
    }
     PRICE_CHANGE(state, action) {
            state.price = action.payload,
            priceIsValid: action.payload.trim().length > 0 && !isNaN(action.payload),
        };
    }
     CURRENCY_CHANGE(state, action) {
            state.currency = action.payload,
            currencyIsValid: action.payload.trim().length > 0,
        };
    }
     SET_EDITABLE_GOODS_ITEM(state, action) {
            state.name = action.payload.name,
            nameIsValid: action.payload.name.trim().length > 0,
            price: action.payload.price,
            priceIsValid: action.payload.price.trim().length > 0 && !isNaN(action.payload.price),
            currency: action.payload.currency,
            currencyIsValid: action.payload.currency.trim().length > 0,
        };
    }
     SET_IS_FORM_VALID(state, action) {
            state.isFormValid = action.payload,
        };
    }

  }
})

export const { todoAdded, todoToggled, todosLoading } = todosSlice.actions

export default todosSlice.reducer