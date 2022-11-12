import './App.css';
import Home from './pages/home/home';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoProvider from './app/TodoCtx';

function App() {
  return (
    <Provider store={store}>
      <TodoProvider>
        <Home />
      </TodoProvider>
    </Provider>
  );
}

export default App;
