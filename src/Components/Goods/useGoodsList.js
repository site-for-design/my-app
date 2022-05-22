import { useState, useEffect } from 'react';
import DataBase from '../../Services/DataBase';

let initialRender = false;
const db = DataBase();

const useGoodsList = () => {

    const [goodsList, setGoodsList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // db function
    const updateGoodsList = () => {
        setIsLoading(true);

        db.getFromLocalStorage()
        .then((state) => {
            setGoodsList(state);
            initialRender = true;

        }).catch(() => {
            setError('Data Base was not found!');
        }).then(() => setIsLoading(false));
    }
    useEffect(() => {
        updateGoodsList();
    }, []);
    
    useEffect(() => {
        if (initialRender) {
        db.setToLocalStorage(goodsList);
        }
    }, [goodsList]);


    const createItem = (name, price, currency) => {
        setGoodsList((prevState) => [
            ...prevState,
            {
              key: Math.random().toString(),
              name: name,
              price: price,
              currency: currency
            }
        ]);
    };

    const editItem = (name, price, currency, editableItem) => {
        setGoodsList((state) => {
            return state.map(item => {
              if (item === editableItem) {
                  item.name = name;
                  item.price = price;
                  item.currency = currency;          
                }
              return item;
            });
        });
    };

    const removeItem = (removableItem) => {
        setGoodsList((state) => {
            return state.filter(item => item !== removableItem);
        });
    };

    return { isLoading, error, setError, goodsList, createItem, editItem, removeItem, updateGoodsList };
}

export default useGoodsList;