import React, { useState, useEffect } from 'react';
import DataBase from '../../Services/DataBase';

let initialRender = false;

const useGoodsList = () => {

    const [goodsList, setGoodsList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // db function
    const db = DataBase();
    useEffect(() => {
        db.getFromLocalStorage().then(
        (state) => {
            setGoodsList(state);
            
            setIsLoading(false);
            initialRender = true;
        },
        () => {
            setError('Data Base was not found!');
        }
        );
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

    return { isLoading, error, setError, goodsList, createItem, editItem, removeItem };
}

export default useGoodsList;