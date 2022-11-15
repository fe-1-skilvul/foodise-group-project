import { createContext, useState } from 'react';

const initialState = {
  showLogin: false,
};

export const loginCtx = createContext(initialState);

const LoginCtxProvider = ({ children }) => {
  const [show, setShow] = useState(initialState.showLogin);
  return (
    <loginCtx.Provider value={{ show, setShow }}>
      {children}
    </loginCtx.Provider>
  );
};

export default LoginCtxProvider;
