import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  cargos: [],
  funcionarios: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CARGOS':
      return { ...state, cargos: [...state.cargos, action.payload] };
    case 'ADD_FUNCIONARIOS':
      return { ...state, funcionarios:[...state.funcionarios,action.payload] };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
