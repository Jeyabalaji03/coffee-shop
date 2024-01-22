import React, { useState } from 'react'
import { createContext } from 'react'
import MenuItem from '../pages/menu/menuitem';

export const MenuContext = createContext(null);


const DefaultCart = () => {

  let cart = {}

  for (let i = 0; i < MenuItem.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}


export const ContextProvider = (props) => {

  const [cartItem, setCartItem] = useState(DefaultCart());

  const AddtoCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  const RemoveCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  const TotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = MenuItem.find((list) => list.id === Number(item))
        totalAmount += cartItem[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }

  const contextvalue = { cartItem, AddtoCart, RemoveCart, TotalCartAmount }


  return (
    <MenuContext.Provider value={contextvalue}>
      {props.children}
    </MenuContext.Provider>
  )
}
