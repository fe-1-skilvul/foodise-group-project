import { createContext, useState } from 'react';

const initialState = {
  showLogin: false,
};

export const loginCtx = createContext(initialState);

const LoginCtxProvider = ({ children }) => {
  const [show, setShow] = useState(initialState.showLogin);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <loginCtx.Provider value={{ show, setShow, isLogin, setIsLogin }}>
      {children}
    </loginCtx.Provider>
  );
};

export default LoginCtxProvider;
