import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/food/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
