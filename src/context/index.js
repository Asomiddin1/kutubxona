import { useReducer } from "react";
import { createContext } from "react";

const initialVal = {
  mode: localStorage.getItem('darkMode') === 'true',
  lang: localStorage.getItem('lang') === 'true',
};
export const Context = createContext();

const reducer = (state = initialVal, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LANG':
        localStorage.setItem('lang', !state.lang);
        return { ...state, lang: !state.lang };
    case 'MODE':
       localStorage.setItem('darkMode', !state.mode);
       return { ...state, mode: !state.mode };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialVal);


  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default Provider;

