

    // const addGoodsItem = async (name, price, currency) => {
    //     await time(1);
    //     const newUser = {
    //         key: Math.random().toString(),
    //         name,
    //         price,
    //         currency,
    //     };
    //     setToLocalStorage(newUser);
    //     return newUser;
    // };

    // const editGoodsItem = async (editableGoodsItem) => {
    //     await time(1);
    //     const data = getFromLocalStorage();
  
    //     const newData = data.map(item => {
    //       if (item.key === editableGoodsItem.key) {
    //           item.name = editableGoodsItem.name;
    //           item.price = editableGoodsItem.price;
    //           item.currency = editableGoodsItem.currency;          
    //       }
    //       return item;
    //     });
    //     console.log(data);
    //     console.log(newData);
    //     localStorage.setItem(DB_KEY, JSON.stringify(newData));
    // };

    // const removeGoodsItem = async (removableItem) => {
    //   await time(1);
    //   const data = getFromLocalStorage();

    //   const newData = data.filter(item => {
    //     if (item.key !== removableItem.key) {
    //       return item;
    //     }
    //   });
    //   localStorage.setItem(DB_KEY, JSON.stringify(newData));
    // };


    isFormValid

    isValide {
        portal
    }

// Плохо работает. Значение переменных не актуальное, а прошлое. И при инициализации не выполняется
// const getNameValue = (e) => {
//     setName(e.target.value);
//     setNameIsValid(() => {
//         return name.trim().length > 1;
//     });

// };
// const getPriceValue = (e) => {
//     setPrice(e.target.value);
//     setPriceIsValid(() => {
//         return price.trim().length > 1 || !isNaN(price);
//     });

// };
// const getCurrencyValue = (e) => {
//     setCurrency(e.target.value);
//     setCurrencyIsValid(() => {
//         return currency.trim().length > 1;
//     });
// };