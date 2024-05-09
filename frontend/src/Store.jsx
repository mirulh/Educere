import React, { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,

  userSaves: localStorage.getItem('userSaves')
    ? JSON.parse(localStorage.getItem('userSaves'))
    : {},

  // userSaves: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload };
    case 'USER_SIGNOUT':
      return { ...state, userInfo: null, userSaves: {} };

    case 'UPDATE_SAVES':
      return { ...state, userSaves: action.payload };
    default:
      return state;
  }
};

export function StoreProvider(prop) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  console.log('Current State', JSON.stringify(value, null, 2));

  return <Store.Provider value={value}>{prop.children}</Store.Provider>;
}

/* 

References

[1] JSON.parse() 

is a JavaScript function used to parse JSON (JavaScript Object Notation) strings and convert them into JavaScript objects.

without parsing, the value will be wrap in quotes which cannot be directly interact with

  "state": {
    "userInfo": "{\"_id\":\"661aad12082a3d0dc8b7ec11\",\"name\":\"Amirul\",\"email\":\"amirul@gmail.com\",\"isAdmin\":true,\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjFhYWQxMjA4MmEzZDBkYzhiN2VjMTEiLCJuYW1lIjoiQW1pcnVsIiwiZW1haWwiOiJhbWlydWxAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzEzMDMwNTgwLCJleHAiOjE3MTU2MjI1ODB9.ZFF08uyaIMz71D8ptYFV8IVQYAvsZigecuUD_L81jqI\"}"

*/

/* 

TODO: 

1) implement save feature. Just like cart use this format just like orders where orders is linked to user through users ID

{
  "_id": ObjectId("user_id"),
  "username": "example_user",
  "email": "user@example.com",
  "password": "hashed_password",
  "favorites": [ObjectId("content_id1"), ObjectId("content_id2"), ...]
}

*/
