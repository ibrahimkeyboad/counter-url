import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <BrowserRouter>
      <Counter />
    </BrowserRouter>
  );
}

export default App;
