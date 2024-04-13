import React, { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  userInfo: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_SIGNIN':
      return { userInfo: action.payload };
    default:
      return state;
  }
};

export default function StoreProvider(prop) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  console.log('Value', JSON.stringify(value, null, 2));

  return <Store.Provider value={value}>{prop.children}</Store.Provider>;
}
