import { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import { loginCtx } from './context/LoginCtx';
import BookMark from './pages/BookMark';
import Detail from './pages/Detail';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';

function App() {
  const { isLogin, setShow } = useContext(loginCtx);
  const loged = true;
  const RequireAuth = ({ children }) => {
    if (isLogin) {
      return <>{children}</>;
    }
    setShow(true);
    return <Navigate to={'/'} />;
  };
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/food/:id"
              element={
                <RequireAuth>
                  <Detail />
                </RequireAuth>
              }
            />
            <Route
              path="/today"
              element={
                <RequireAuth>
                  <BookMark />
                </RequireAuth>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
