import { createContext, useReducer, useContext } from 'react';
import Cookies from 'js-cookie';

export const actionTypes = {
  SET_USER: 'SET_USER',
};

export const Store = createContext();

const initialState = {
  user: Cookies.get('HospitalAdmin') ? Cookies.get('HospitalAdmin') : null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  return (
    <Store.Provider value={useReducer(reducer, initialState)}>
      {props.children}
    </Store.Provider>
  );
};

export const useStateValue = () => useContext(Store);
